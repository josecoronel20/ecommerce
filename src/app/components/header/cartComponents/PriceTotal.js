import react from "react";

export default function PriceTotal({cartItems}) {
const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity
},0).toFixed(2)


console.log(cartItems + "total")
    return (<div className="flex justify-between w-full">
        <h4>TOTAL</h4>
        <p>${total}</p>
    </div>)
}