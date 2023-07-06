import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="w-full flex flex-col bottom-0">
            <div className="w-full flex px-14 bg-lime-900 py-5">
                <div className="w-[20%] flex flex-col justify-evenly">
                    <img src="/footerlogo.png" alt="logo-white" className=" w-[80%]" />
                    <p className="footer__text text-2xl my-5">غذای خوب، احساس خوب</p>
                    <p className="footer__text">021-22839712</p>
                    <p className="footer__text">دفتر مرکزی: تهران ، خیابان شهید باهنر ، میدان یاسر ، کوچه آغاسی ، ساختمان آرش، طبقه سوم</p>
                    <p className="footer__text">آدرس کارخانه : اتوبان تهران-اصفهان، نرسیده شاهین شهر</p>
                </div>
                <div className="w-[20%] mx-28 pt-28">
                    <h3 className="mb-8 text-white font-bold text-2xl">عناوین اصلی</h3>
                    <ul className=" list-none">
                        <li className="footer__icons"><Link to={"/"}>صفحه اصلی</Link></li>
                        <li className="footer__icons"><Link to={"/products"}>محصولات ما</Link></li>
                        <li className="footer__icons"><Link to={"/blog"}>دستور پحت</Link></li>
                        <li className="footer__icons"><Link to={"/contact"}>تماس با ما</Link></li>
                    </ul>
                </div>
                <div className="w-[60%] mr-[-200px] pt-28">
                    <h3 className="mb-4 text-white font-bold text-2xl">درباره ما</h3>
                    <p className="text-white text-lg w-[80%]">{"مدیران شـرکت مواد غذایی خوشـنام با عنـوان تجـاری مک با پشـتوانه بیـش از 40 سال تجربه و تخصص در صنعت آردسازی کشور مجموعه ای پویا و فعال در زمینه صـنعت آرد می باشـند که با در برداشـتن کارخانجات تک کرج، تبریز کار و ارس مهر (واحد نمونه کشـوری) و با توجه به پیشـرفت روزافزون تکنولـوژی تولید ماکارونی در دنیا ، برآن شـدند تا با در اختیار داشـتن بهترین متخصصین ایرانی و ایتالیایی و پیشـرفته ترین ماشـین آلات ایتالیـا ) برای اولین بار در ایـران نسـبت به تولید ماکارونـی تحت لیسـانـس والدیگـرانو ایتالیـاFAVAروز دنیا ( با هدف عرضـه محصـولی با کیفیت برتر و قیمت مناسـب در انواع مختلف اقدام نمایند "}</p>
                </div>
            </div>
            <div className="w-full bg-red-500 flex justify-end items-center p-2">
                <p className="text-zinc-900 text-base font-sans font-semibold">Powered by Saam Zeinali</p>
            </div>
        </div>
    )
}