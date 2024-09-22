"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
      inputRef.current?.focus();
  };

  return (
    <div data-testid="search-bar" className="relative">
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={inputRef}
        className={` w-full rounded`}
      />
      {!isFocus && (
        <button
          onClick={() => focusInput()}
          className={` absolute right-0 top-0 flex  text-colorLight3`}
        >
          <MagnifyingGlassIcon className="size-6 text-colorDark1"/>
        </button>
      )}
    </div>
  );
}
