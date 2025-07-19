export default function PostMedia({ mediaColor }: { mediaColor: string }) {
  return (
    <div
      className={`w-full h-80 ${mediaColor} flex items-center justify-center text-white text-lg font-semibold cursor-pointer hover:opacity-95 transition-opacity duration-200`}
    >
      Photo/Video Content
    </div>
  );
}
