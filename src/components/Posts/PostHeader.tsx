import formatPostDate from "./formatPostDate";
import { PostData } from "./types";

export default function PostHeader({
  postData,
  onShowOptions,
  onClosePost,
}: {
  postData: PostData;
  onShowOptions: () => void;
  onClosePost: () => void;
}) {
  const postDate = formatPostDate(postData.hoursAgo);

  return (
    <div className="flex justify-between w-full h-fit px-4 pt-3 pb-2">
      <div className="flex gap-3 w-fit h-fit items-start">
        <div
          className={`${postData.avatar} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold`}
        >
          {postData.user.charAt(0)}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-900 hover:underline cursor-pointer">
              {postData.user}
            </span>
            <button className="follow-button text-blue-600 hover:text-blue-700 font-medium text-sm">
              • Follow
            </button>
            {postData.isRecommended && (
              <span className="recommended-badge bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                Recommended post
              </span>
            )}
          </div>
          <div className="text-gray-500 text-sm hover:underline cursor-pointer">
            {postDate}
          </div>
        </div>
      </div>
      <div className="flex gap-1 w-fit h-fit items-center">
        <button
          onClick={onShowOptions}
          className="options-button w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer text-gray-600 transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </button>
        <button
          onClick={onClosePost}
          className="close-button w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer text-gray-600 transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
