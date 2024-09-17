import { hoverPointer } from "../../../utils/styles";
import react from "react";

export default function Quantity({ product, handlerQuantity}) {

  return (
      <div className="flex justify-around w-full h-fit border rounded border-colorLight2">
        <p
          onClick={() =>
            handlerQuantity({ productId: product.id, operation: "resta" })
          }
          className={`${hoverPointer} px-1`}
        >
          -
        </p>
        {product.quantity}
        <p
          onClick={() =>
            handlerQuantity({ productId: product.id, operation: "suma" })
          }
          className={`${hoverPointer} px-1`}
        >
          +
        </p>
      </div>
  );
}
