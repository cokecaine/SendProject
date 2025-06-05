import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    `btn btn-ghost text-sm font-semibold font-['Poppins'] rounded-4xl px-4 py-2 transition ${
      location.pathname === path
        ? "bg-white text-[#1d262d]"
        : "text-white hover:bg-white hover:text-[#1d262d]"
    }`;

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex w-full justify-center items-center px-4 py-4 mt-6 gap-4">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-gray-800">
            SendProject
          </span>
        </div>

        {/* NAVBAR */}
        <div className="w-full max-w-lg bg-[#1d262d] rounded-full px-4 py-3">
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 text-center">
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
            <Link to="/send" className={linkClass("/send")}>
              Submit
            </Link>
            <Link to="/feed" className={linkClass("/feed")}>
              Message
            </Link>
            <Link to="/donate" className={linkClass("/donate")}>
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full px-4 py-4 flex justify-between items-center bg-[#1d262d]">
        <span className="text-white font-bold text-lg">SendProject</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#1d262d] px-4 pb-4 rounded-b-xl flex flex-col gap-2 text-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={linkClass("/")}
          >
            Home
          </Link>
          <Link
            to="/send"
            onClick={() => setIsOpen(false)}
            className={linkClass("/send")}
          >
            Submit
          </Link>
          <Link
            to="/feed"
            onClick={() => setIsOpen(false)}
            className={linkClass("/feed")}
          >
            Message
          </Link>
          <Link
            to="/donate"
            onClick={() => setIsOpen(false)}
            className={linkClass("/donate")}
          >
            Support
          </Link>
        </div>
      )}
    </>
  );
}
