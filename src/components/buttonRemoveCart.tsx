import { MdDeleteForever } from "react-icons/md"; 

export default function ButtonRemoveCart({
  handleClick,
}: {
  handleClick: () => void;
}) {
  return (
    <div>
      <button
        className="mt-[5px] mr-[5px] flex h-[25px] w-[25px] items-center justify-center rounded-lg bg-negative select-none"
        onClick={handleClick}
      >
        <MdDeleteForever className="h-[20px] w-[20px] text-white" />
      </button>
    </div>
  );
}
