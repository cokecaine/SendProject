const validateMessage = (req, res, next) => {
  const { from, to, message } = req.body;

  if (!from?.trim() || !to?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (message.length > 255) {
    return res.status(400).json({ error: "Message too long" });
  }

  next();
};

module.exports = { validateMessage };