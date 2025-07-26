"use client";
import { useState } from "react";
import postsData from "./postsData";
import Post from "./Post";
import PostOptionsModal from "./PostOptionsModal";
import CommentsModal from "@components/Comments/CommentsModal";
import ShareModal from "./ShareModal";
import { Reaction } from "./reactions";

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

  const handleAddLike = (postId: number, reaction: Reaction) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: { ...post.likes, [reaction]: post.likes[reaction] + 1 },
          };
        }
        return post;
      }),
    );
  };

  return (
    <>
      <div className="flex flex-col w-full h-fit gap-4">
        {posts.map((post) => (
          <Post
            isModal={false}
            key={post.id}
            postData={post}
            onReact={(reaction: Reaction) => {
              handleAddLike(post.id, reaction);
            }}
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
          onReact={(reaction: Reaction) => {
            handleAddLike(showCommentsModal, reaction);
          }}
          onShowOptions={() => setShowOptionsModal(showCommentsModal)}
          onClosePost={() => handleClosePost(showCommentsModal)}
          onShowComments={() => setShowCommentsModal(showCommentsModal)}
          onShowShare={() => setShowShareModal(showCommentsModal)}
          onShowReactions={() => {
            setShowReactions(showCommentsModal);
          }}
          onHideReactions={() => {
            setShowReactions(null);
          }}
          showReactions={showReactions === showCommentsModal}
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
