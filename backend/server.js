const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const messageRoutes = require("./Routes/message");
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected")) 
  .catch((err) => console.error("❌ MongoDB error:", err));
