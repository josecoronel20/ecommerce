import {useState} from "react";

export const useToggle = (initialState: boolean = false) =>{

const [isToggleOpen, setIsToggleOpen] = useState<boolean>(initialState);

const handlerToggle = ():void => {
    setIsToggleOpen(!isToggleOpen);
  };

  return {isToggleOpen, handlerToggle, setIsToggleOpen}

}
