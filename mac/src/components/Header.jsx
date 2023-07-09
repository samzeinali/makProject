import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <header className="w-full flex flex-col relative mb-[-8px]">
            <div className="w-full bg-red-600 h-[40px]"></div>
            <div className="w-full bg-white px-15 h-[80px] flex justify-between items-center">
                <div className="w-[45%] pr-28 flex items-center justify-center">
                    <ul className="flex w-full justify-evenly list-none">
                        <li className="header__icon"><Link to={"/"}>خانه</Link></li>
                        <li className="header__icon"><Link to={"/products"}>محصولات</Link></li>
                    </ul>
                </div>
                <div className="w-[45%] pl-28 flex items-center justify-center">
                    <ul className="flex w-full justify-evenly list-none">
                        <li className="header__icon"><Link to={"/about"}>درباره ما</Link></li>
                        <li className="header__icon"><Link to={"/contact"}>تماس با ما</Link></li>
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <img src="/headerline.png" alt="" className="w-full"/>
            </div>
            <img src="/logo.png" className="w-[10%] absolute mx-[45%]" alt="" />
        </header>
    )
}