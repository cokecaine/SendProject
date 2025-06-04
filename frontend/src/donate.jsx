import React from "react";
import { motion } from "framer-motion";

export default function donate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-6 py-10"
    >
      <div>
        <div className="min-h-screen bg-white flex flex-col justify-start items-center px-1 pt-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Support Our Work
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-10">
            This space was created for people who sometimes don’t know how to
            say what they feel. A quiet place to let your heart speak without
            fear. If this space helped you feel seen or heard, you can help keep
            it going. One small donation helps us continue being here — for you,
            and for others who need a safe space. Because sometimes, just
            knowing someone is willing to listen… is everything.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <a
              href="https://trakteer.id/Dreamertoyou"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-md transition duration-200"
            >
              🍵 Trakteer
            </a>
            <a
              href="https://saweria.co/Dreamertoyou"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-md transition duration-200"
            >
              💛 Saweria
            </a>
          </div>

          <p className="text-sm text-gray-400 mt-8">
            Thank you for helping us help others ❤️
          </p>
        </div>
      </div>
    </motion.div>
  );
}
