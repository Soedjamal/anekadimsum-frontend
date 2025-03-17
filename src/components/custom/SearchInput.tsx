import React, { useState } from "react";
import { Input } from "../ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Search } from "lucide-react";

const SearchInput = () => {
  const [search, setSearch] = useState(false);

  return (
    <>
      <div
        className={
          search
            ? "search-input flex w-full items-center gap-4 rounded-md px-4 border-2  border-neutral-500 "
            : "search-input flex w-full items-center gap-4 rounded-md px-4 border-none"
        }
      >
        {search && (
          <Input
            placeholder="Search"
            className="border-none outline-none bg-transparent"
          />
        )}
        <Search onClick={() => setSearch(!search)} />
      </div>
    </>
  );
};

export default SearchInput;
