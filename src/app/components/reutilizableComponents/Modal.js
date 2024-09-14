import React from "react";
import { useRef, useEffect } from "react";

const Modal = ({ children, toggle, setToggle }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (elementRef.current && elementRef.current.contains(event.target)) {
        if (toggle) {
          setToggle(!toggle);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggle, setToggle]);

  return (
    <div>
      {toggle && (
        <div
          ref={elementRef}
          className=" absolute backdrop-blur-sm bg-colorDark1 bg-opacity-10 z-30 h-screen w-full top-0 left-0 transition-transform ease-in-out duration-150 pt-6"
        ></div>
      )}
      {children}
    </div>
  );
};

export default Modal;
