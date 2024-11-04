"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/nav_styles.css";

export default function Navbar() {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearchClick = () => {
    setSearchActive(!searchActive);
  };

  return (
    <nav className="backdrop-blur-sm flex justify-between items-center p-4">
      <div className="site-logo">
        <Link href="/">
          <img src="assets/logo.png" alt="logo" className="w-16" />
        </Link>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link
            href="/wildlife"
            className="text-5xl text-white font-bold text-lg hover:text-gray-300"
          >
            Wildlife
          </Link>
        </li>
        <li>
          <Link
            href="/climate"
            className="text-5xl text-white font-bold text-lg hover:text-gray-300"
          >
            Climate
          </Link>
        </li>
        <li>
          <Link
            href="/donate"
            className="text-5xl text-white font-bold text-lg hover:text-gray-300"
          >
            Donate
          </Link>
        </li>
        {/* <li>
          <Link
            href="#oceans"
            className="text-white font-bold text-lg hover:text-gray-300"
          >
            Oceans
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="text-white font-bold text-lg hover:text-gray-300"
          >
            About Us
          </Link>
        </li> */}
      </ul>

      <div className={`search relative ${searchActive ? "active" : ""}`}>
        <input
          type="text"
          className={`input transition-all duration-300 ${
            searchActive ? "w-64 p-2" : "w-0"
          }`}
          placeholder="Search..."
          style={{ color: "black" }}
        />
        <button
          className="search-button ml-2 bg-white"
          onClick={handleSearchClick}
        >
          <img
            src="assets/search-alt-1-svgrepo-com.svg"
            alt="search"
            className="w-6 h-6"
          />
        </button>
      </div>
    </nav>
  );
}
