'use client'
import React, { useContext, useState } from "react";
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
  const [addSuccessful, setAddSuccessful] = useState<boolean>(false)

  if (!contextCart) {
    return null;
  }

  if (!contextProducts) {
    return null;
  }

  const { cartItems, setCartItems } = contextCart;

  const { products } = contextProducts;

  const elementToRender = addSuccessful === true ? "Se agregó al carrito!" : <ShoppingBagIcon data-testid='cart-icon' className="size-6" />


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

    setAddSuccessful(true)
    setTimeout(() => {
        setAddSuccessful(false)
    }, 2000);

  };

  return (
    <button
      onClick={() => handlerAddItem()}
      className={`${hoverPointer} ${styleButtonDark} text-sm`}
    >
{elementToRender}    </button>
  );
}
