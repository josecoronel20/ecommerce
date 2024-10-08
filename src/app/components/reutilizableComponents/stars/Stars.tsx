import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";

interface StarsProp {
  rating: number;
}

export default function Stars({ rating }: StarsProp) {
  const starsYellow = Array(Math.round(rating)).fill(0)
  const starsGrey =  Array(5 - starsYellow.length).fill(0)

  return (
    <div className="flex gap-1">
      {starsYellow.map((_, index) => {
        return (
          <StarIcon
            data-testid={`star-yellow-${index + 1}`}
            key={index}
            className=" size-6 text-yellow-300"
          />
        );
      })}

      {starsGrey.map((_, index) => {
        return (
          <StarIcon
            data-testid={`star-grey-${index + rating + 1}`}
            key={index + rating}
            className="size-6 text-colorDark2"
          />
        );
      })}
    </div>
  );
}
