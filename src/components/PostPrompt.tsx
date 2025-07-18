"use client";
import { useState } from "react";

export default function PostPrompt() {
  const [postText, setPostText] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Post Prompt */}
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex gap-3 mb-3">
          <div className="profile-picture w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            U
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="What's on your mind, Username?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              className={`w-full px-4 py-3 bg-gray-100 rounded-full border-none outline-none transition-all duration-200 text-gray-700 placeholder-gray-500 ${
                isInputFocused
                  ? "bg-white shadow-sm ring-2 ring-blue-100"
                  : "hover:bg-gray-200"
              }`}
            />
          </div>
        </div>

        <div className="h-px bg-gray-200 mb-3"></div>

        <div className="flex justify-around">
          <button className="action-button flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-1 justify-center">
            <svg
              className="w-6 h-6 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9ZM19 9H15V5L19 9Z" />
            </svg>
            <span className="font-medium text-gray-600">Live video</span>
          </button>

          <button className="action-button flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-1 justify-center">
            <svg
              className="w-6 h-6 text-green-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H8V4H20V16ZM18 9L14.5 13.5L11.5 10.5L8 14H20V9Z" />
            </svg>
            <span className="font-medium text-gray-600">Photo/video</span>
          </button>
        </div>
      </div>

      {/* Create Story Prompt */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <button className="story-button flex items-center gap-3 w-full hover:bg-gray-50 transition-colors duration-200 p-2 rounded-lg">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            +
          </div>
          <div className="flex flex-col items-start">
            <div className="font-semibold text-gray-900">Create Story</div>
            <div className="text-sm text-gray-500">
              Share a photo or create something.
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
