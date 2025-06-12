const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./Routes/message");

const validateEnv = () => {
  const required = ["MONGO_URI", "API_KEY"];
  for (const key of required) {
    if (!process.env[key]){
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  }
};
validateEnv();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:3000",
    "https://send-project-o3z58xzn8-cokecaines-projects.vercel.app",
    "https://www.sendproject.fun",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-API-Key"]
}));
app.use(express.json({limit: "25kb"}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Reduce from 100 to 50
  message: {
    error: "Too many requests from this IP, please try again after 15 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

app.use("/api/messages", messageRoutes);

app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err);
    process.exit(1);
  });