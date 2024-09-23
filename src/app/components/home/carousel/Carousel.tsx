'use client'
import React, { useContext } from "react";
import { ContextProducts} from "../../../context/ContextProducts";
import Card from "../../reutilizableComponents/card/Card";

export default function Carousel(){
    const productsContext = useContext(ContextProducts)

    if(!productsContext){
        return null
    }

    const {products} = productsContext

    const productsFiltered = products.filter((product) => product.category === "fragrances")

    console.log(productsFiltered)
    return(<section className="p-1 flex gap-3 overflow-x-scroll">
        {productsFiltered.map((product) => {
            return <Card key={product.id} product={product}/>
        })}
    </section>)
}