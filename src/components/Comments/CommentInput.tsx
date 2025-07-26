export default function CommentInput({
  commentText,
  setCommentText,
  handleSendComment,
}: {
  commentText: string;
  setCommentText: (comment: string) => void;
  handleSendComment: () => void;
}) {
  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex gap-3">
        <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
          U
        </div>
        <div className="flex-1 bg-gray-100 rounded-2xl px-4 py-3">
          <input
            type="text"
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-transparent outline-none text-sm"
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-gray-700 text-lg">
                😊
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-lg">
                📷
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-lg">
                🎬
              </button>
              <button className="text-gray-500 hover:text-gray-700 text-xs font-semibold">
                GIF
              </button>
            </div>
            <button
              onClick={handleSendComment}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                commentText.trim()
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!commentText.trim()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
