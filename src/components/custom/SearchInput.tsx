import { useRef } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>();

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div
        className={
          "search-input flex w-full items-center gap-4 rounded-md px-2 border-[1px]  border-neutral-500"
        }
      >
        <Input
          ref={inputRef}
          placeholder="Cari"
          className="border-none outline-none bg-transparent w-full p-0"
        />
        <Search onClick={handleFocus} />
      </div>
    </>
  );
};

export default SearchInput;
