"use client";
import { IconSearch } from "../../utils/icons";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function SearchBar() {
  const [isFocus, setIsFocus] = useState(false);

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="relative">
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        ref={inputRef}
        className={` w-full rounded`}
      />
      {isFocus === false && (
        <button
          onClick={() => focusInput()}
          className={` absolute right-0 top-0 flex  text-colorLight3`}
        >
          <IconSearch />
        </button>
      )}
    </div>
  );
}
