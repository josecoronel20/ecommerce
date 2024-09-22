import React from "react";
import { CartItems } from "../../../../utils/types";

export default function PriceTotal({cartItems} : {cartItems:CartItems[]}) {
const total = cartItems.reduce((acc:number, item:CartItems) => {
    return acc + item.price * item.quantity
},0).toFixed(2)

    return (<div className="flex justify-between w-full">
        <h4>TOTAL</h4>
        <p>${total}</p>
    </div>)
}