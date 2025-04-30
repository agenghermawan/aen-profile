'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pages = ["home", "about", "services", "projects", "contact"];

  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 text-white bg-black md:bg-transparent">
        <h1 className="text-2xl font-bold">
          <Image
            src="/images/logo/logo-aen.png"
            alt="Logo AEN"
            width={120}
            height={120}
          />
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 font-medium">
          {pages.map((page) => (
            <li key={page}>
              <Link
                href={`/${page === "home" ? "" : page}`}
                className="hover:text-yellow-400"
              >
                {page.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Icon 'X'
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Icon hamburger (3 lines)
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4 text-white">
          <ul className="flex flex-col gap-4">
            {pages.map((page) => (
              <li key={page}>
                <Link
                  href={`/${page === "home" ? "" : page}`}
                  className="hover:text-yellow-400"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {page.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
