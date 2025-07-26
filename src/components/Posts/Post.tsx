import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostStats from "./PostStats";
import PostText from "./PostText";
import { Reaction } from "./reactions";
import { PostData } from "./types";

export default function Post({
  postData,
  onShowOptions,
  onClosePost,
  onShowComments,
  onShowShare,
  onShowReactions,
  onHideReactions,
  showReactions,
  onReact,
  isModal,
}: {
  postData: PostData;
  onShowOptions: () => void;
  onReact: (reaction: Reaction) => void;
  onClosePost: () => void;
  onShowComments: () => void;
  onShowShare: () => void;
  onShowReactions: () => void;
  onHideReactions: () => void;
  showReactions: boolean;
  isModal: boolean;
}) {
  return (
    <div className="flex flex-col h-fit w-full bg-white md:rounded-lg shadow-sm border border-gray-200">
      <PostHeader
        isModal={isModal}
        postData={postData}
        onShowOptions={onShowOptions}
        onClosePost={onClosePost}
      />
      <PostText text={postData.text} />
      <PostMedia mediaColor={postData.media} />
      <PostStats postData={postData} />
      <div className="h-px bg-gray-200 mx-4"></div>
      <PostActions
        isModal={isModal}
        onReact={onReact}
        onShowComments={onShowComments}
        onShowShare={onShowShare}
        onShowReactions={onShowReactions}
        onHideReactions={onHideReactions}
        showReactions={showReactions}
      />
    </div>
  );
}
