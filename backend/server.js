const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./Routes/message");

// Only validate required environment variables
const validateEnv = () => {
  const required = ["MONGO_URI"]; // Removed API_KEY
  for (const key of required) {
    if (!process.env[key]){
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  }
};
validateEnv();

const PORT = process.env.PORT || 3000;
const app = express();

app.set('trust proxy', 1);

// Security middleware
app.use(helmet());

// CORS - Only allow your frontend domains
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:3000",
    "https://send-project-o3z58xzn8-cokecaines-projects.vercel.app",
    "https://www.sendproject.fun",
  ],
  credentials: true,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json({ limit: "25kb" }));

// Stricter rate limiting for better security
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // Reduced to 30 requests per IP per 15 minutes
  message: {
    error: "Too many requests from this IP, please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// Request logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Routes
app.use("/api/messages", messageRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    timestamp: new Date().toISOString() 
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  });