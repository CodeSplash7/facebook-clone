import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostMedia from "./PostMedia";
import PostStats from "./PostStats";
import PostText from "./PostText";
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
}: {
  postData: PostData;
  onShowOptions: () => void;
  onClosePost: () => void;
  onShowComments: () => void;
  onShowShare: () => void;
  onShowReactions: () => void;
  onHideReactions: () => void;
  showReactions: boolean;
}) {
  return (
    <div className="flex flex-col h-fit w-full bg-white md:rounded-lg shadow-sm border border-gray-200">
      <PostHeader
        postData={postData}
        onShowOptions={onShowOptions}
        onClosePost={onClosePost}
      />
      <PostText text={postData.text} />
      <PostMedia mediaColor={postData.media} />
      <PostStats postData={postData} />
      <div className="h-px bg-gray-200 mx-4"></div>
      <PostActions
        onShowComments={onShowComments}
        onShowShare={onShowShare}
        onShowReactions={onShowReactions}
        onHideReactions={onHideReactions}
        showReactions={showReactions}
      />
    </div>
  );
}
