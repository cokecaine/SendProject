const express = require("express");
const router = express.Router();
const Message = require("../models/message"); // ✅ pastikan path-nya benar
const { validateMessage } = require("../middleware/validate");
const { validateApiKey } = require("../middleware/apiKey");

router.get("/", validateApiKey, async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }); // Add sorting
    console.log(`✅ Fetched ${messages.length} messages`);
    res.status(200).json(messages);
  } catch (err) {
    console.error("❌ Error fetching messages:", err);
    res.status(500).json({ error: err.message });
  }
});

router.post("/", validateApiKey, validateMessage, async (req, res) => {
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
