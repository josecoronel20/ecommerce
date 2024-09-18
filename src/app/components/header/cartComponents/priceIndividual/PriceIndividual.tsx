import react from "react";

export default function PriceIndividual({price, quantity}: {price:number, quantity:number}){
    return (<p className="text-sm flex justify-end">
        ${price * quantity}
    </p>)
}