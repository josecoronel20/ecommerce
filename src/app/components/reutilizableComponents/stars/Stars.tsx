import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

interface StarsProp {
  rating: number;
}

export default function Stars({ rating }: StarsProp) {
  const starsYellowArray = [...Array(Math.round(rating))];
  const starsGreyArray = [...Array(5 - Math.round(rating))];

  return (
    <div className="flex gap-1">
      {starsYellowArray.map((_, index) => {
        return <StarIcon key={index} className=" size-6 text-yellow-300" />;
      })}

      {starsGreyArray.map((_, index) => {
        return (
          <StarIcon key={index + rating} className="size-6 text-colorDark2" />
        );
      })}
    </div>
  );
}
