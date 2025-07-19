export default function PostActions({
  onShowComments,
  onShowShare,
  onShowReactions,
  onHideReactions,
  showReactions,
}: {
  onShowComments: () => void;
  onShowShare: () => void;
  onShowReactions: () => void;
  onHideReactions: () => void;
  showReactions: boolean;
}) {
  return (
    <div className="px-4 py-1 flex justify-around relative">
      <div
        className="relative flex-1"
        onMouseEnter={onShowReactions}
        onMouseLeave={onHideReactions}
      >
        {showReactions && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border p-2 flex gap-1 z-10 text-[30px]">
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              👍
            </button>
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              ❤️
            </button>
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              😂
            </button>
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              😮
            </button>
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              😢
            </button>
            <button className="reaction-btn w-10 h-10 rounded-full hover:scale-110 transition-transform">
              😡
            </button>
          </div>
        )}
        <button className="action-button flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 w-full justify-center text-gray-600 transition-colors duration-200">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V9a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="font-medium">Like</span>
        </button>
      </div>
      <button
        onClick={onShowComments}
        className="action-button flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 flex-1 justify-center text-gray-600 transition-colors duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        <span className="font-medium">Comment</span>
      </button>
      <button
        onClick={onShowShare}
        className="action-button flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-gray-100 flex-1 justify-center text-gray-600 transition-colors duration-200"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <span className="font-medium">Share</span>
      </button>
    </div>
  );
}
