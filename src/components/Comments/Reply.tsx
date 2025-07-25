import { Reply as ReplyType } from "./types";

export default function Reply({ reply }: { reply: ReplyType }) {
  return (
    <div key={reply.id} className="flex gap-3 relative">
      {/* Line pointing to this reply */}
      <div className="absolute -left-8 top-4 w-6 h-0.5 bg-gray-300"></div>

      <div
        className={`${reply.avatar} w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}
      >
        {reply.user.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="bg-gray-100 rounded-2xl px-3 py-2 inline-block max-w-full">
          <div className="font-semibold text-sm text-gray-900">
            {reply.user}
          </div>
          <div className="text-sm text-gray-900">{reply.text}</div>
        </div>
        <div className="flex items-center gap-4 mt-1 ml-3 text-xs text-gray-500">
          <span>{reply.time}</span>
          <button
            className={`hover:underline ${reply.isLiked ? "text-blue-600 font-semibold" : "text-gray-500"}`}
          >
            Like
          </button>
          <button className="hover:underline">Reply</button>
          {reply.likes > 0 && (
            <span className="text-gray-600">
              {reply.likes} {reply.likes === 1 ? "like" : "likes"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
