import { hoverPointer } from "../../../../utils/styles";
import React from "react";

const Logo = () => {
  return (
    <p data-testid="logo" className={`${hoverPointer} text-colorColor font-bold text-xl`}>
      D.<span className="text-colorLight3">SHOP</span>
    </p>
  );
};

export default Logo;
