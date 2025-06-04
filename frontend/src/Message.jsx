import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Message({ message, onClose }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const maxLength = 255;
  const handleSend = async () => {
    try {
      const res = await fetch(`${process.env.Backend_url}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, message: messageText }),
      });

      if (res.ok) {
        console.log("✅ Message sent!");
        navigate("/feed");
      } else {
        console.error("❌ Failed to send");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-4 py-10 bg-white"
    >
      <div className="text-center text-black text-4xl md:text-7xl font-semibold font-['Poppins'] mb-6">
        Send your messages
      </div>

      <div className="mx-auto max-w-4xl text-center text-black text-base md:text-xl font-semibold font-['Poppins'] leading-relaxed">
        We know that some messages carry pieces of your heart. That’s why we
        treat them with the care they deserve. Your identity stays hidden. Your
        words stay yours. Nothing is tracked, nothing is shared. Only the
        message is delivered — quietly, respectfully, privately.
      </div>

      <div className="max-w-4xl w-full bg-zinc-800 rounded-3xl mt-10 mx-auto p-6 md:p-10">
        <form className="space-y-8">
          {/* From */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="from"
              className="text-white text-2xl md:text-4xl font-semibold font-['Poppins']"
            >
              From:
            </label>
            <input
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              id="from"
              type="text"
              placeholder="Your name"
              className="w-full h-14 md:h-20 bg-zinc-300 rounded-full px-6 text-black text-lg md:text-2xl font-['Poppins'] placeholder-zinc-500 outline-none"
            />
          </div>

          {/* To */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="to"
              className="text-white text-2xl md:text-4xl font-semibold font-['Poppins']"
            >
              To:
            </label>
            <input
              value={to}
              onChange={(e) => setTo(e.target.value)}
              id="to"
              type="text"
              placeholder="Who you want to send a message to"
              className="w-full h-14 md:h-20 bg-zinc-300 rounded-full px-6 text-black text-lg md:text-2xl font-['Poppins'] placeholder-zinc-500 outline-none"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-white text-2xl md:text-4xl font-semibold font-['Poppins']"
            >
              Message:
            </label>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              id="message"
              placeholder="Write your message here..."
              rows={6}
              maxLength={maxLength}
              className="w-full bg-zinc-300 rounded-3xl px-6 py-4 text-black text-base md:text-xl font-['Poppins'] placeholder-zinc-500 placeholder:text-lg md:placeholder:text-2xl outline-none resize-none"
            />
          </div>

          {/* Character count & submit */}
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
            <span className="text-neutral-400 text-lg md:text-2xl font-normal font-['Poppins']">
              {messageText.length}/{maxLength}
            </span>
            <button
              type="button"
              onClick={handleSend}
              className="bg-zinc-800 text-white px-6 py-3 rounded-full text-lg md:text-2xl font-semibold font-['Poppins'] hover:bg-zinc-700 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
