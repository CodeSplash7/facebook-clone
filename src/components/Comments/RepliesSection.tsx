import Reply from "./Reply";
import ReplyPrompt from "./ReplyPrompt";
import { Comment } from "./types";

export default function RepliesSection({
  comment,
  expandedReplies,
  toggleReplies,
  setReplyingToComment,
}: {
  comment: Comment;
  expandedReplies: Set<number>;
  toggleReplies: (commentId: number) => void;
  setReplyingToComment: (replyingToComment: number) => void;
}) {
  return (
    <>
      {comment.replies.length > 0 && (
        <div className="ml-11 mt-3 relative">
          {/* Vertical line from main comment */}
          <div className="absolute -left-8 -top-3 w-0.5 h-6 bg-gray-300"></div>

          {!expandedReplies.has(comment.id) ? (
            <button
              onClick={() => toggleReplies(comment.id)}
              className="text-sm font-semibold text-gray-600 hover:underline flex items-center gap-2"
            >
              <div className="w-6 h-0.5 bg-gray-300"></div>
              View all {comment.replies.length}{" "}
              {comment.replies.length === 1 ? "reply" : "replies"}
            </button>
          ) : (
            <div className="space-y-3">
              {comment.replies.map((reply, i) => (
                <Reply key={i} reply={reply} />
              ))}
              <ReplyPrompt
                comment={comment}
                setReplyingToComment={setReplyingToComment}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
