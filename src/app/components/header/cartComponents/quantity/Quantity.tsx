import { hoverPointer } from "../../../../utils/styles";
import React from "react";
import { CartItems, HandlerQuantityParams } from "../../../../utils/types";

export default function Quantity({
  product,
  handlerQuantity,
}: {
  product: CartItems;
  handlerQuantity: HandlerQuantityParams;
}) {
  return (
    <div className="flex justify-around w-full h-fit border rounded border-colorLight2">
      <button
        onClick={() =>
          handlerQuantity({ productId: product.id, operation: "resta" })
        }
        className={`${hoverPointer} px-1`}
      >
        -
      </button>
      <p>{product.quantity}</p>
      <button
        onClick={() =>
          handlerQuantity({ productId: product.id, operation: "suma" })
        }
        className={`${hoverPointer} px-1`}
      >
        +
      </button>
    </div>
  );
}
