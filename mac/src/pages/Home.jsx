import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full top-0">
            <div className="w-full top-0"><img className="w-full h-[600px]" src="/Banner-min-scaled.jpg" alt="" /></div>
            <div className="w-full flex flex-col items-center">
                <h2 className="w-full text-black text-2xl text-center mt-[20px]">محصولات ما</h2>
                <p className="w-full my-4 text-base font-bold text-red-500 text-center my-[15px]">وقتی صحبت از ماکارونی، پودر کیک و آرد می شود، آیا به فکر بهترین‌ها هستید؟ مک هم همینطور</p>
                <div className="w-full px-14 flex flex-row justify-evenly items-center mb-14">
                    <div className="home__products" onClick={navigate("/")}>
                        <img src="/cake4.png" alt="cake" className="home__products-image" />
                        <div className="home__products-button"><p>مشاهده پودر کیک مک</p><span>به زودی</span></div>
                    </div>
                    <div className="home__products" onClick={navigate("/products")}>
                        <img src="/macaroni.png" alt="macaroni" className="home__products-image" />
                        <div className="home__products-button"><p>مشاهده ماکارونی مک</p></div>
                    </div>
                    <div className="home__products" onClick={navigate("/")}>
                        <img src="/ard.png" alt="ard" className="home__products-image" />
                        <div className="home__products-button"><p>مشاهده آرد مک</p><span>به زودی</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}