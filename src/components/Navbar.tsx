export default function Navbar() {
  return (
    <div className="bg-white w-full h-fit flex justify-between px-[16px] border-slate-300 border-b-[2px] py-[8px]">
      <div className="flex w-fit gap-[8px]">
        {/* Replaced by icon */}
        <div className="rounded-full p-[2px] bg-blue-500 text-white font-bold h-[42px] w-[42px] flex items-center justify-center text-[1.7rem]">
          f
        </div>
        <div className="rounded-full p-[2px] bg-gray-200 h-[42px] w-[42px] flex items-center justify-center ">
          s
        </div>
      </div>

      <div className="flex w-fit gap-[8px]">
        <div className="rounded-full p-[2px] bg-gray-200 h-[42px] w-[42px] flex items-center justify-center">
          m
        </div>
        <div className="rounded-full p-[2px] bg-gray-200 h-[42px] w-[42px] flex items-center justify-center">
          ms
        </div>
        <div className="rounded-full p-[2px] bg-gray-200 h-[42px] w-[42px] flex items-center justify-center">
          n
        </div>
        <div className="rounded-full p-[2px] bg-gray-200 h-[42px] w-[42px] flex items-center justify-center">
          p
        </div>
      </div>
    </div>
  );
}
