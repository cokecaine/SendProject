import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Home3() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-1 py-12">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="Group.svg"
              alt="Bear Hug Illustration"
              className="w-72 md:w-96 object-contain"
            />
          </div>

          {/* Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don’t worry, we’re here for you
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Sometimes, what’s in your heart is hard to say. It’s okay — you
              don’t have to explain or reveal anything. This is your space to
              let it out.
              <br />
              <br />
              No names. No judgment. Just a quiet place where your truth is
              safe.
              <br />
              <br />
              We’re not here to fix you — only to listen. Whisper what you’ve
              held inside. This space is always here for you.
            </p>
          </div>
        </div>

        {/* Tombol */}
        <div className="mt-12">
          <Link
            to="/send"
            className="btn btn-outline bg-gray-900 text-white px-4 py-5 rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 transition duration-200"
          >
            Send a Message
          </Link>
        </div>
      </div>
    </div>
  );
}
