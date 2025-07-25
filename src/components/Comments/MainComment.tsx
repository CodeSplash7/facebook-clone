import { Comment } from "./types";

export default function MainComment({
  comment,
  setReplyingToComment,
}: {
  comment: Comment;
  setReplyingToComment: (replyToCommentId: number) => void;
}) {
  return (
    <div className="flex gap-3">
      <div
        className={`${comment.avatar} w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}
      >
        {comment.user.charAt(0)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="bg-gray-100 rounded-2xl px-3 py-2 inline-block max-w-full">
          <div className="font-semibold text-sm text-gray-900">
            {comment.user}
          </div>
          <div className="text-sm text-gray-900">{comment.text}</div>
        </div>
        <div className="flex items-center gap-4 mt-1 ml-3 text-xs text-gray-500">
          <span>{comment.time}</span>
          <button
            className={`hover:underline ${comment.isLiked ? "text-blue-600 font-semibold" : "text-gray-500"}`}
          >
            Like
          </button>
          <button
            className="hover:underline"
            onClick={() => setReplyingToComment(comment.id)}
          >
            Reply
          </button>
          {comment.likes > 0 && (
            <span className="text-gray-600">
              {comment.likes} {comment.likes === 1 ? "like" : "likes"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
