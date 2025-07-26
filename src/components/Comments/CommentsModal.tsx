import { useState } from "react";
import { PostData } from "@components/Posts/types";
import Post from "@components/Posts/Post";
import SortDropdown from "./SortDropdown";
import { SortOption } from "./types";
import { Reaction } from "../Posts/reactions";
import ModalTitle from "./ModalTitle";
import CommentInput from "./CommentInput";
import CommentsList from "./CommentsList";
import { mockComments } from "./commentsData";

export default function CommentsModal({
  postData,
  onClose,
  onShowOptions,
  onClosePost,
  onShowComments,
  onShowShare,
  onShowReactions,
  onHideReactions,
  showReactions,
  onReact,
}: {
  postData: PostData;
  onClose: () => void;
  onShowOptions: () => void;
  onReact: (reaction: Reaction) => void;
  onClosePost: () => void;
  onShowComments: () => void;
  onShowShare: () => void;
  onShowReactions: () => void;
  onHideReactions: () => void;
  showReactions: boolean;
}) {
  const [commentText, setCommentText] = useState("");
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("most-relevant");
  const [replyingToComment, setReplyingToComment] = useState<number | null>(
    null,
  );
  const [replyText, setReplyText] = useState("");
  const [expandedReplies, setExpandedReplies] = useState<Set<number>>(
    new Set(),
  );

  const toggleReplies = (commentId: number) => {
    const newExpanded = new Set(expandedReplies);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedReplies(newExpanded);
  };

  const handleSendComment = () => {
    if (commentText.trim()) {
      // Handle comment submission
      setCommentText("");
    }
  };

  const handleSendReply = (commentId: number) => {
    if (replyText.trim()) {
      // Handle reply submission
      setReplyText("");
      setReplyingToComment(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl h-[95vh] flex flex-col shadow-xl border border-gray-200 rounded-lg overflow-y-auto">
        <ModalTitle postData={postData} onClose={onClose} />

        {/* Post component */}
        <div className="border-b border-gray-200">
          <Post
            isModal
            postData={postData}
            onShowOptions={onShowOptions}
            onClosePost={onClosePost}
            onShowComments={onShowComments}
            onShowShare={onShowShare}
            onShowReactions={onShowReactions}
            onHideReactions={onHideReactions}
            showReactions={showReactions}
            onReact={onReact}
          />
        </div>

        {/* Comments section */}
        <div className="flex-1 flex flex-col ">
          <SortDropdown
            setShowSortDropdown={setShowSortDropdown}
            showSortDropdown={showSortDropdown}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {/* Comments list */}
          <CommentsList
            comments={mockComments}
            replyingToComment={replyingToComment}
            setReplyingToComment={setReplyingToComment}
            expandedReplies={expandedReplies}
            toggleReplies={toggleReplies}
            setReplyText={setReplyText}
            replyText={replyText}
            handleSendReply={handleSendReply}
          />
          {/* Comment input */}
          <CommentInput
            commentText={commentText}
            setCommentText={setCommentText}
            handleSendComment={handleSendComment}
          />
        </div>
      </div>
    </div>
  );
}
