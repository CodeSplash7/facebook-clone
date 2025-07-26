import MainComment from "./MainComment";
import RepliesSection from "./RepliesSection";
import ReplyInput from "./ReplyInput";
import { Comment } from "./types";

export default function CommentsList({
  comments,
  replyingToComment,
  setReplyingToComment,
  expandedReplies,
  toggleReplies,
  replyText,
  setReplyText,
  handleSendReply,
}: {
  comments: Comment[];
  replyingToComment: number | null;
  setReplyingToComment: (replyingToComment: number) => void;
  expandedReplies: Set<number>;
  toggleReplies: (commentId: number) => void;
  setReplyText: (replyText: string) => void;
  replyText: string;
  handleSendReply: (commentId: number) => void;
}) {
  return (
    <div className="flex-1 p-4 space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="relative">
          <MainComment
            comment={comment}
            setReplyingToComment={setReplyingToComment}
          />
          {replyingToComment !== comment.id && (
            <RepliesSection
              comment={comment}
              expandedReplies={expandedReplies}
              toggleReplies={toggleReplies}
              setReplyingToComment={setReplyingToComment}
            />
          )}

          {replyingToComment === comment.id && (
            <ReplyInput
              comment={comment}
              replyText={replyText}
              setReplyText={setReplyText}
              handleSendReply={handleSendReply}
            />
          )}
        </div>
      ))}
    </div>
  );
}
