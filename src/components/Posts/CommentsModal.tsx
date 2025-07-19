import { useState } from "react";
import { PostData } from "./types";
import formatPostDate from "./formatPostDate";

// Comments Modal Component
export default function CommentsModal({
  postData,
  onClose,
}: {
  postData: PostData;
  onClose: () => void;
}) {
  const [commentText, setCommentText] = useState("");

  const mockComments = [
    { id: 1, user: "Alice Johnson", text: "Amazing shot! 📸", time: "1h" },
    {
      id: 2,
      user: "Bob Smith",
      text: "Love this! Where was this taken?",
      time: "45m",
    },
    { id: 3, user: "Carol Davis", text: "Beautiful colors 🌅", time: "30m" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-hidden flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{postData.user}&apos;s Post</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="mb-4">
            <div className="flex gap-3 mb-2">
              <div
                className={`${postData.avatar} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold`}
              >
                {postData.user.charAt(0)}
              </div>
              <div>
                <div className="font-semibold">{postData.user}</div>
                <div className="text-sm text-gray-500">
                  {formatPostDate(postData.hoursAgo)}
                </div>
              </div>
            </div>
            <p className="text-gray-900 mb-3">{postData.text}</p>
            <div
              className={`w-full h-40 ${postData.media} rounded-lg flex items-center justify-center text-white text-sm`}
            >
              Photo/Video Content
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900">Comments</h4>
            {mockComments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
                  {comment.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-2xl px-3 py-2">
                    <div className="font-semibold text-sm">{comment.user}</div>
                    <div className="text-sm">{comment.text}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 ml-3">
                    {comment.time} ago
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-4">
          <div className="flex gap-3 items-end">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
              U
            </div>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-gray-100 rounded-full px-4 py-2 pr-20 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-blue-200"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                <button className="text-gray-500 hover:text-gray-700 p-1">
                  😊
                </button>
                <button className="text-gray-500 hover:text-gray-700 p-1">
                  📷
                </button>
                <button className="text-gray-500 hover:text-gray-700 p-1">
                  🎬
                </button>
                <button className="text-gray-500 hover:text-gray-700 p-1">
                  GIF
                </button>
                <button className="text-blue-600 hover:text-blue-700 p-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
