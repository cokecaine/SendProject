const express = require("express");
const router = express.Router();
const Message = require("../models/message");
const { validateMessage } = require("../middleware/validate");

// ✅ NO validateApiKey here
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    console.log(`✅ Fetched ${messages.length} messages`);
    res.status(200).json(messages);
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ NO validateApiKey here
router.post("/", validateMessage, async (req, res) => {
  const { from, to, message } = req.body;
  try {
    const newMessage = new Message({ from, to, message });
    await newMessage.save();
    console.log(`✅ Message saved: ${from} → ${to}`);
    res.status(201).json(newMessage);
  } catch (err) {
    console.error("❌ Error saving message:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
