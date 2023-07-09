import { Link } from "react-router-dom"


export const ProductCard = ({name , image , id}) => {
    return (
        <div key={id} className="w-[23%] flex bg-gray-50 my-4 mx-2 border-[1px] border-solid border-zinc-400 flex-col items-center rounded-lg overflow-hidden">
            <img src={image} className="w-full" alt={name} />
            <h2 className="w-full text-center my-5">{name}</h2>
            <Link to={`/products/${name}`} className="mb-5"><button className="bg-red-600 cursor-pointer text-white text-base hover:bg-red-700 transition ease-linear py-2 px-4 rounded-sm border-none">اطلاعات بیشتر</button></Link>
        </div>
    )
}