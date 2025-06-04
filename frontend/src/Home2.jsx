import React from "react";

export default function Home2() {
  return (
    <div className="min-h-screen bg-[#1b2228] flex flex-col md:flex-row items-center gap-y-10 px-6 md:px-24 py-20 text-white font-['Poppins'] gap-10 md:gap-0">
      {/* Kiri: Judul */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
          You have <span className="text-pink-400 font-bold">secret</span>
          <br />
          message for your
          <br />
          beloved one?
        </h1>
      </div>

      {/* Kanan: Deskripsi */}
      <div className="w-full md:w-1/2 text-center md:text-left text-sm md:text-base text-gray-300 max-w-md">
        <p>
          You don’t have to explain. You don’t have to reveal. This space is
          yours — to whisper what you can’t say out loud.
        </p>
      </div>
    </div>
  );
}
