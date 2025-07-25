import { Comment } from "./types";

export default function ReplyPrompt({
  comment,
  setReplyingToComment,
}: {
  comment: Comment;
  setReplyingToComment: (replyingToComment: number) => void;
}) {
  return (
    <div className="flex gap-3 relative">
      <div className="absolute -left-8 top-4 w-6 h-0.5 bg-gray-300"></div>
      <div className="bg-blue-500 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
        U
      </div>
      <div className="flex-1">
        <div className="bg-gray-100 rounded-full px-3 py-2 text-sm">
          <input
            type="text"
            placeholder={`Reply to ${comment.user}...`}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            onFocus={() => setReplyingToComment(comment.id)}
          />
        </div>
      </div>
    </div>
  );
}
