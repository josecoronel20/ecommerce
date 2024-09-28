import React from "react";
import Quantity from "../quantity/Quantity";
import Delete from "../delete/Delete";
import PriceIndividual from "../priceIndividual/PriceIndividual";
import { CartItems, HandlerDeleteParams, HandlerQuantityParams } from "../../../../utils/types";


export default function CartCard({item, handlerQuantity, handlerDelete}: {
    item: CartItems;
    handlerQuantity: HandlerQuantityParams;
    handlerDelete: HandlerDeleteParams;
  }){


    //todo:corregir bg size de cards
    //cambiar img por image de next
return (<><div className="grid grid-cols-2 gap-1 col-span-2">
    <img
      className="bg-colorLight2 rounded"
      src={item.images[0]}
      alt={`img de ${item.title}`}
    />
    <h3 className="text-xs">{item.title}</h3>
  </div>
  <div className="flex flex-col gap-1 justify-start items-center">
    <Quantity
      product={item}
      handlerQuantity={handlerQuantity}
    />
    <Delete
      productId={item.id}
      handlerDelete={handlerDelete}
    />
  </div>
  <PriceIndividual
    quantity={item.quantity}
    price={item.price}
  /></>

)
}