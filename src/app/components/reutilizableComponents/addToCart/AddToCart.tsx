import React, { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import {
  hoverPointer,
  styleButtonDark,
} from "../../../utils/styles";
import { ContextCart } from "../../../context/ContextCart";
import { ContextProducts } from "../../../context/ContextProducts";

export default function AddToCart({ productId }: { productId: number }) {
  const contextCart = useContext(ContextCart);
  const contextProducts = useContext(ContextProducts);

  if (!contextCart) {
    return null;
  }

  if (!contextProducts) {
    return null;
  }

  const { cartItems, setCartItems } = contextCart;

  const { products } = contextProducts;

  const handlerAddItem = () => {
    const productFinded = products.find((product) => product.id === productId);

    if (productFinded) {
      const existingItem = cartItems.find((item) => item.id === productId);

      if (existingItem) {
        setCartItems(
          cartItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        const newProduct = { ...productFinded, quantity: 1 };
        setCartItems([...cartItems, newProduct]);
      }
    }

    console.log(cartItems)
  };

  return (
    <button
      onClick={() => handlerAddItem()}
      className={`${hoverPointer} ${styleButtonDark}`}
    >
      <ShoppingBagIcon className="size-6" />
    </button>
  );
}
