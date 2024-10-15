// import React, { useContext } from "react";
// import { CartItems } from "../../utils/types";
// import { ContextCart } from "../../context/ContextCart";

// export default function CardCheckout() {
//   const context = useContext(ContextCart);

//   if (!context) {
//     return <div>No hay productos en el carrito</div>; // Retorna JSX en vez de un objeto
//   }

//   const { cartItems } = context;

//   return (
//     <section>
//       {cartItems.length > 0 ? (
//         cartItems.map((product: CartItems) => (
//           <div key={product.id} className="grid grid-cols-2 gap-1 col-span-2">
//             <img
//               className="bg-colorLight2 rounded"
//               src={product.images[0]}
//               alt={`img de ${product.title}`}
//             />
//             <h3 className="text-xs">{product.title}</h3>
//           </div>
//         ))
//       ) : (
//         <div>Tu carrito está vacío</div> // Caso donde no hay productos en el carrito
//       )}
//     </section>
//   );
// }

"use client";
import React from "react";
import { useContext } from "react";
import { ContextCart } from "../../../context/ContextCart";
import { CartItems } from "../../../utils/types";
import PriceTotal from "../../header/cartComponents/priceTotal/PriceTotal";
import PriceIndividual from "../../header/cartComponents/priceIndividual/PriceIndividual";
import Image from "next/image";

export default function CardCheckout() {
  const context = useContext(ContextCart);

  if (!context) {
    return null;
  }

  const { cartItems, handlerQuantity, handlerDelete } = context;

  return (
    <section className=" p-4 rounded-md gap-2 bg-colorLight2">
      <div className="flex flex-col gap-2">
        {cartItems.map((product: CartItems) => (
          <div key={product.id} className="grid grid-cols-6 gap-1">
            <Image
              className="bg-colorLight2 rounded"
              src={product.images[0]}
              alt={`img de ${product.title}`}
            />
            <div className="col-span-3">
              <p className="">{product.title}</p>
              <p className="text-colorLight3">
                {product.quantity} producto{product.quantity > 1 && "s"}
              </p>
            </div>
            <p className="col-span-2">
              <PriceIndividual
                quantity={product.quantity}
                price={product.price}
              />
            </p>
          </div>
        ))}
      </div>
      <div>
        <PriceTotal cartItems={cartItems} />
      </div>
    </section>
  );
}
