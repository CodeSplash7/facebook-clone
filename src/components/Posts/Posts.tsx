"use client";
import { useState } from "react";
import postsData from "./postsData";
import Post from "./Post";
import PostOptionsModal from "./PostOptionsModal";
import CommentsModal from "./CommentsModal";
import ShareModal from "./ShareModal";

export default function Posts() {
  const [posts, setPosts] = useState(postsData);
  const [showOptionsModal, setShowOptionsModal] = useState<number | null>(null);
  const [showCommentsModal, setShowCommentsModal] = useState<number | null>(
    null,
  );
  const [showShareModal, setShowShareModal] = useState<number | null>(null);
  const [showReactions, setShowReactions] = useState<number | null>(null);

  const handleClosePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <>
      <div className="flex flex-col w-full h-fit gap-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            postData={post}
            onShowOptions={() => setShowOptionsModal(post.id)}
            onClosePost={() => handleClosePost(post.id)}
            onShowComments={() => setShowCommentsModal(post.id)}
            onShowShare={() => setShowShareModal(post.id)}
            onShowReactions={() => {
              setShowReactions(post.id);
            }}
            onHideReactions={() => {
              setShowReactions(null);
            }}
            showReactions={showReactions === post.id}
          />
        ))}
      </div>

      {/* Post Options Modal */}
      {showOptionsModal && (
        <PostOptionsModal
          postData={posts.find((p) => p.id === showOptionsModal)!}
          onClose={() => setShowOptionsModal(null)}
        />
      )}

      {/* Comments Modal */}
      {showCommentsModal && (
        <CommentsModal
          postData={posts.find((p) => p.id === showCommentsModal)!}
          onClose={() => setShowCommentsModal(null)}
        />
      )}

      {/* Share Modal */}
      {showShareModal && (
        <ShareModal
          // postData={posts.find((p) => p.id === showShareModal)!}
          onClose={() => setShowShareModal(null)}
        />
      )}
    </>
  );
}
