import axios from "axios"   
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const Product = () => {
    const [product , setproduct] = useState([])
    const param = useParams()
    const api_data_url = "http://localhost:8080/products"
    useEffect(() => {
        axios.get(api_data_url)
            .then(
                (res)=>{
                    const newdata = res.data.data;
                    const paramName = param.productName;
                    const resualt = newdata.find((product)=>{
                        if (product.productName === paramName ) {
                            return product;
                        }
                    })
                    setproduct(resualt);
                }
                )
            .catch((e)=>{
                console.log(e.massage)
            })
    }, [])
    return (
        <div className="w-full px-14 py-10">
            <div className="w-full flex">
                <div className="w-[40%]"><img className="w-full" src={product.imageUrl} alt={product.productName} /></div>
                <div className="py-10">
                    <h1 className="text-red-600 font-bold text-[3.5rem] mb-4">{product.productName}</h1>
                    <p className="w-[90%] text-xl my-4">{product.description}</p>
                    <h2 className="my-4 text-3xl">مشخصات محصول</h2>
                    <ul className="px-12">
                        <li className="product___list-item"><p>نوع : </p><span>{product.title}</span></li>
                        <li className="product___list-item"><p>وزن کارتن : </p><span>{product.boxWeight}</span></li>
                        <li className="product___list-item"><p>تعداد موجود در کارتن : </p><span>{product.boxsize}</span></li>
                        <li className="product___list-item"><p>وزن هر بسته : </p><span>{product.weight}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}