"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocus, setIsFocus] = useState(false);
  const router = useRouter();

  const [searchText, setSearchText] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handlerSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handlerOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/products/search/${searchText}`);
  };

  return (
    <div data-testid="search-bar" className="relative">
      <form onSubmit={handlerOnSubmit}>
        <input
          data-testid="inputSearch"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          ref={inputRef}
          className={` w-full rounded md:bg-colorLight2`}
          onChange={handlerSearchText}
        />
      </form>
      {!isFocus && (
        <button
          onClick={() => focusInput()}
          className={` absolute right-0 top-0 flex  text-colorLight3`}
        >
          <MagnifyingGlassIcon className="size-6 text-colorDark1" />
        </button>
      )}
    </div>
  );
}
