const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const messageRoutes = require("./Routes/message");
const { validateMessage } = require("./middleware/validate");

const validateEnv = () => {
  const required = ["MONGO_URI", "PORT"];
  for (const key of required) {
    if (!process.env[key]){
      throw new Error(`❌ Missing environment variable: ${key}`);
    }
  }
};
validateEnv();

const PORT = process.env.PORT ;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({limit: "25kb"}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
})
app.use(limiter);

app.use("/api/messages", messageRoutes);

app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ error: "Internal Server Error" });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB error:", err)
    process.exit(1);
  });

module.exports = { validateEnv, validateMessage };