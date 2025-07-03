import Navbar from "@/components/Navbar";
import PostPrompt from "@/components/PostPrompt";

export default function HomePage() {
  return (
    <div className="w-full h-fit flex flex-col gap-[16px] bg-slate-200">
      <Navbar />
      <PostPrompt />
    </div>
  );
}
