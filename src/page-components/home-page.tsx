import Navbar from "@/components/Navbar";
import PostPrompt from "@/components/PostPrompt";
import Posts from "@/components/Posts/Posts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 md:px-4 py-6 md:py-6 space-y-4 md:space-y-4">
        <PostPrompt />
        <Posts />
      </div>
    </div>
  );
}
