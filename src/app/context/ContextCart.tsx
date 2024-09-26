"use client";
import { createContext, useState, ReactNode } from "react";
import { CartItems, CartContextType  } from "../utils/types";

export const ContextCart = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps{
  children:ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const addToCart = (product: CartItems) => {
    product.quantity = 1;
    setCartItems([...cartItems, product]);
  };

  const handlerDelete = (productId:number) => {
    setCartItems(cartItems.filter((product) => product.id !== productId));
  };

  const handlerQuantity = ({ productId, operation }: {productId: number, operation: "suma" | "resta"} ) => {
    const itemFound = cartItems.find((item) => item.id === productId);

    if (!itemFound?.quantity) return

    const updatedItem =
      operation === "suma"
        ? { ...itemFound, quantity: itemFound.quantity + 1 }
        : itemFound.quantity > 1
        ? {
            ...itemFound,
            quantity: itemFound.quantity - 1,
          }
        : itemFound;

    const updatedCart = cartItems.map((item) =>
      item.id === productId ? updatedItem : item
    );

    setCartItems(updatedCart);
  };

  return (
    <ContextCart.Provider
      value={{ cartItems, addToCart, handlerDelete, handlerQuantity,setCartItems }}
    >
      {children}
    </ContextCart.Provider>
  );
}
