import { PostData } from "./types";

export default function PostStats({ postData }: { postData: PostData }) {
  return (
    <div className="px-4 py-2 flex justify-between items-center text-gray-500 text-sm">
      <div className="flex items-center gap-1 cursor-pointer hover:underline">
        <div className="flex">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
            👍
          </div>
          <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs -ml-1">
            ❤️
          </div>
          <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs -ml-1">
            😂
          </div>
        </div>
        <span className="ml-1">{postData.likes.toLocaleString()}</span>
      </div>
      <div className="flex gap-4">
        <span className="cursor-pointer hover:underline">
          {postData.comments} comments
        </span>
        <span className="cursor-pointer hover:underline">
          {postData.shares} shares
        </span>
      </div>
    </div>
  );
}
