import { FormEvent, useRef, useState } from "react";
import { Input } from "../../ui/input";
import { Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(searchParams);
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ search: input });
      navigate(`/products?q=${input}`);
    } else {
      setSearchParams({ search: "" });
    }
  };

  return (
    <>
      <div className="hover:border-[2px] search-input flex w-full items-center gap-4 rounded-md px-2 border-[1px]  border-neutral-500">
        <form onSubmit={handleSubmit}>
          <Input
            ref={inputRef}
            placeholder="Cari"
            type="search"
            onChange={(e) => setInput(e.target.value)}
            className="border-none outline-none bg-transparent w-full p-0 appearance-none"
          />
        </form>
        <Search onClick={handleFocus} />
      </div>
    </>
  );
};

export default SearchInput;
