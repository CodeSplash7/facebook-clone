export default function Posts() {
  return (
    <div className="flex flex-col w-fit bg-full gap-[16px]">
      <Post />
      <Post />
    </div>
  );
}

function Post() {
  return (
    <div className="flex flex-col h-fit w-full">
      <PostHeader />
      <PostText />
      <PostMedia />
      <PostStats />
      <PostActions />
    </div>
  );
}

function PostHeader() {
  return <div className="flex justify-between"></div>;
}

function PostText() {
  return <div></div>;
}
function PostMedia() {
  return <div></div>;
}
function PostStats() {
  return <div></div>;
}
function PostActions() {
  return <div></div>;
}
