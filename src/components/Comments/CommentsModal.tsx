import { useState } from "react";
import { PostData } from "@components/Posts/types";
import Post from "@components/Posts/Post";
import CloseModal from "./CloseModal";
import SortDropdown from "./SortDropdown";
import { SortOption } from "./types";
import { mockComments } from "./commentsData";
import MainComment from "./MainComment";
import RepliesSection from "./RepliesSection";
import ReplyInput from "./ReplyInput";
import { Reaction } from "../Posts/reactions";

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
    <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-2xl h-[95vh] flex flex-col shadow-xl border border-gray-200 rounded-lg overflow-y-auto">
        <CloseModal onClose={onClose} />

        {/* Post component */}
        <div className="border-b border-gray-200">
          <Post
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
        <div className="flex-1 flex flex-col overflow-hidden">
          <SortDropdown
            setShowSortDropdown={setShowSortDropdown}
            showSortDropdown={showSortDropdown}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          {/* Comments list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {mockComments.map((comment) => (
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

          {/* Comment input */}
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
        </div>
      </div>
    </div>
  );
}
