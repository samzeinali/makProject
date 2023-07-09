import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ProductCard } from "../components/ProductCard";

export const Products = () => {
    const [Products , setProducts] = useState([]);
    const api_data_url = "http://localhost:8080/products"
    useEffect(() => {
        axios.get(api_data_url)
            .then(
                (res)=>{
                    const newdata = res.data.data;
                    setProducts(newdata)
                }
                )
            .catch((e)=>{
                console.log(e.massage)
            })
    }, [])
    return (
        <div className="w-full flex flex-row flex-wrap justify-start p-14">
            {Products.map((product)=>{return <ProductCard id={product.id} name={product.productName} image={product.imageUrl}/>})}
        </div>
    )
}