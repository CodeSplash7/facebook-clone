import { PostData } from "./types";

// Post Options Modal Component
export default function PostOptionsModal({
  postData,
  onClose,
}: {
  postData: PostData;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Post Options</h3>
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

          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <div className="font-medium text-left">Interested</div>
                <div className="text-sm text-gray-500">
                  More of your posts will be like this
                </div>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 13H5v-2h14v2z" />
              </svg>
              <div>
                <div className="font-medium text-left">Not interested</div>
                <div className="text-sm text-gray-500">
                  Less of your posts will be like this
                </div>
              </div>
            </button>

            <div className="h-px bg-gray-200 my-2"></div>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
              </svg>
              <div>
                <div className="font-medium text-left">Save post</div>
                <div className="text-sm text-gray-500">
                  Add this to your saved items
                </div>
              </div>
            </button>

            <div className="h-px bg-gray-200 my-2"></div>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
              </svg>
              <div className="font-medium text-left">
                Turn on notifications for this post
              </div>
            </button>

            <div className="h-px bg-gray-200 my-2"></div>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              <div className="font-medium text-left">
                Report post to group admins
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <div className="font-medium text-left">Hide post</div>
                <div className="text-sm text-gray-500">
                  See fewer posts like this
                </div>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <div className="font-medium text-left">
                  Snooze {postData.user} for 30 days
                </div>
                <div className="text-sm text-gray-500">
                  Temporarily stop seeing posts
                </div>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <div className="font-medium text-left">
                  Hide all from {postData.user}
                </div>
                <div className="text-sm text-gray-500">
                  Stop seeing posts from this group
                </div>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
              </svg>
              <div>
                <div className="font-medium text-left">Report post</div>
                <div className="text-sm text-gray-500">
                  We won&apos;t let {postData.user} know who reported this
                </div>
              </div>
            </button>

            <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-red-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <div>
                <div className="font-medium text-left">
                  Block {postData.user}&apos;s profile
                </div>
                <div className="text-sm text-gray-500">
                  You won&apos;t be able to see or contact each other
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
