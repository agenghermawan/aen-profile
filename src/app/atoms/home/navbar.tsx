import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 text-white">
        <h1 className="text-2xl font-bold">
          <span className="text-white">Up Construction</span>
        </h1>
        <ul className="hidden md:flex gap-6 font-medium">
          {["home", "about", "services", "projects", "blog", "contact"].map(
            (page) => (
              <li key={page}>
                <Link
                  href={`/${page === "home" ? "" : page}`}
                  className="hover:text-yellow-400"
                >
                  {page.toUpperCase()}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
