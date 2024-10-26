import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

interface RatingProps{
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const RatingSection:React.FC<RatingProps> = ({setRating}) => {
  // Manejo del rating (estrellas)
  const [starsYellow, setStarsYellow] = useState<number[]>([]);
  const starsGrey = Array(5 - starsYellow.length).fill(0);

  const handlerRating = (index: number) => {
    setRating(index);
    setStarsYellow(Array(index).fill(0));
  };
  return (
    <div className="flex flex-col gap-1">
      <p>Rating</p>
      <div className="flex gap-1">
        {starsYellow.map((_, index) => (
          <StarIcon
            onClick={() => handlerRating(index + 1)}
            key={index}
            className="size-6 cursor-pointer text-yellow-300"
          />
        ))}

        {starsGrey.map((_, index) => (
          <StarIcon
            onClick={() => handlerRating(index + starsYellow.length + 1)}
            key={index + starsYellow.length}
            className="size-6 cursor-pointer text-colorDark2"
          />
        ))}
      </div>
    </div>
  );
};

export default RatingSection;
