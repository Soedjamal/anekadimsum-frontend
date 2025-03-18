import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <>
      <div
        className={
          "search-input flex w-full items-center gap-4 rounded-md px-4 border-2  border-neutral-500"
        }
      >
        <Input
          placeholder="Search"
          className="border-none outline-none bg-transparent"
        />
        <Search />
      </div>
    </>
  );
};

export default SearchInput;
