"use client";
import { useState } from "react";

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-white w-full h-fit flex justify-between items-center px-4 py-2 shadow-sm border-b border-gray-200 relative">
      {/* Left Section - Logo and Search */}
      <div className="flex items-center gap-2">
        {/* Facebook Logo */}
        <button className="facebook-logo rounded-full bg-blue-600 text-white font-bold h-10 w-10 flex items-center justify-center text-xl hover:bg-blue-700 transition-colors duration-200">
          f
        </button>

        {/* Search Button/Input */}
        <div className="relative">
          {!isSearchExpanded ? (
            <button
              onClick={() => setIsSearchExpanded(true)}
              className="search-button rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          ) : (
            <div className="search-expanded absolute top-0 left-0 z-10">
              <input
                type="text"
                placeholder="Search Facebook"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => setIsSearchExpanded(false)}
                autoFocus
                className="w-60 h-10 px-4 bg-gray-100 rounded-full border-none outline-none focus:bg-white focus:shadow-lg transition-all duration-200 text-gray-700 placeholder-gray-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Navigation Icons */}
      <div className="flex items-center gap-2">
        <button
          className="nav-button rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          title="Menu"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>

        <button
          className="nav-button rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          title="Messenger"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        </button>

        <button
          className="nav-button rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          title="Notifications"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
          </svg>
        </button>

        <button
          className="nav-button rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
          title="Account"
        >
          <svg
            className="w-5 h-5 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
