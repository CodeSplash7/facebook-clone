import { PostData } from "../Posts/types";
import CloseModal from "./CloseModal";

export default function ModalTitle({
  postData,
  onClose,
}: {
  postData: PostData;
  onClose: () => void;
}) {
  return (
    <div className="relative bg-white h-fit w-full py-[16px] text-[20px] font-bold flex justify-center">
      <div> {postData.user}&apos;s Post</div>
      <CloseModal onClose={onClose} />
    </div>
  );
}
