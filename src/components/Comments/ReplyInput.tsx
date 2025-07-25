import { Comment } from "./types";

export default function ReplyInput({
  comment,
  replyText,
  setReplyText,
  handleSendReply,
}: {
  comment: Comment;
  replyText: string;
  setReplyText: (replyText: string) => void;
  handleSendReply: (commentId: number) => void;
}) {
  return (
    <div className="ml-11 mt-3 flex gap-3">
      <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
        U
      </div>
      <div className="flex-1 bg-gray-100 rounded-2xl px-3 py-2">
        <input
          type="text"
          placeholder={`Reply to ${comment.user}...`}
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className="w-full bg-transparent outline-none text-sm"
          autoFocus
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-3">
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
            onClick={() => handleSendReply(comment.id)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
              replyText.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!replyText.trim()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
