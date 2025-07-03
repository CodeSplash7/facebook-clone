export default function PostPrompt() {
  return (
    <div className={"flex flex-col gap-[16px]"}>
      {/* Prompt 1 */}
      <div
        className={
          "p-[16px] bg-white flex flex-col gap-[8px] border-slate-300 border-b-[2px] "
        }
      >
        <div className={"flex flex-row h-fit w-full gap-[8px]"}>
          <div
            className={`bg-slate-400 rounded-full w-[42px] h-[42px] items-center justify-center flex p-[2px]`}
          >
            p.pic
          </div>
          <div
            className={`w-full h-[42px] bg-slate-300 rounded-full flex items-center px-[16px]`}
          >
            What's on your mind, Username?
          </div>
        </div>
        <div className={`w-full h-[1px] bg-slate-200`}></div>
        <div className={`flex justify-around h-fit w-full pt-[8px]`}>
          <div className={``}>Live video</div>
          <div className={``}>Photo/video</div>
        </div>
      </div>
      {/* Prompt 2 */}

      <div
        className={`bg-white p-[16px] flex gap-[8px] items-center border-slate-300 border-b-[2px] `}
      >
        <div className="w-[42px] h-[42px] bg-blue-100 rounded-full items-center justify-center flex">
          +
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-[1.1rem]">Create Story</div>
          <div className="text-[0.9rem]">
            Share a photo or create something.
          </div>
        </div>
      </div>
    </div>
  );
}
