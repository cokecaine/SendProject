import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-white text-center px-4 pt-30">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        <span>Hey, </span>{" "}
        <Typewriter
          words={["How was your day? 😊"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={0}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-gray-600 text-base md:text-xl max-w-xl mb-24">
        It’s okay if today felt heavy. I’m here — say as much or as little as
        you want.
      </p>
      <div className="flex justify-between w-full max-w-screen-md absolute bottom-20 hover:text-gray-950 px-6 text-sm text-gray-500">
        <a
          href="https://github.com/Tiarawr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-2 py-1 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
        >
          <img src="github.svg" alt="github" className="w-5 h-5" />
          <span>github.com/Tiarawr</span>
        </a>
        <a
          href="https://github.com/cokecaine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-2 py-1 transition duration-200 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
        >
          <img src="github.svg" alt="github" className="w-5 h-5" />
          <span>github.com/cokecaine</span>
        </a>
      </div>
    </div>
  );
}
