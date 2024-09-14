import {useState} from "react";

export const useToggle = (initialState = false) =>{

const [isToggleOpen, setIsToggleOpen] = useState(initialState);

const handlerToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return {isToggleOpen, handlerToggle, setIsToggleOpen}

}
