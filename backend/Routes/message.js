const express = require("express");
const router = express.Router();
const Message = require("../models/message"); // ✅ pastikan path-nya benar

router.get("/", async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { from, to, message } = req.body;
  try {
    const newMessage = new Message({ from, to, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
