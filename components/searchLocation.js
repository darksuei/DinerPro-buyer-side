import { IoSearchOutline } from "react-icons/io5";

export default function Searchbox() {
  return (
    <div className="flex items-center text-[#CCCCCC] relative justify-center">
      <input type="text" className="outline-none rounded-[1rem] border border-[#CCCCCC]" />
      <div className="absolute font-bold right-2">
        <IoSearchOutline />
      </div>
    </div>
  );
}
