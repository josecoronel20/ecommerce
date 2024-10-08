import React from "react";

export default function PriceIndividual({price, quantity}: {price:number, quantity:number}){

    const finalPrice = ((price * quantity).toFixed(2)).toString()
    return (<p className="text-sm flex justify-end">
        ${finalPrice}
    </p>)
}