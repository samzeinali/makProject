
export const About = () => {
    return (
        <div className="w-full">
            <div className="about__img relative w-full flex justify-center items-center h-[500px]">
                <h1 className="z-20 text-zinc-100 text-[4rem] font-bold">درباره ماکارونی مک</h1>
                <div className="z-10 w-full bg-zinc-900 opacity-80 absolute top-0 right-0 h-[500px]"></div>
            </div>
            <div className="w-full flex px-14 py-10">
                <div className="w-[50%] flex flex-col">
                    <p className="w-full text-red-700 text-base my-4">تاریخچه ما</p>
                    <h2 className="w-full text-3xl text-zinc-900 font-bold my-6">درباره ما</h2>
                    <hr className="w-[30%] mb-5" />
                    <p className="w-full text-xl text-zinc-800 text-justify px-5">{"مدیران شـرکت مواد غذایی خوشـنام با عنـوان تجـاری مک با پشـتوانه بیـش از 40 سال تجربه و تخصص در صنعت آردسازی کشور مجموعه ای پویا و فعال در زمینه صـنعت آرد می باشـند که با در برداشـتن کارخانجات تک کرج، تبریز کار و ارس مهر (واحد نمونه کشـوری) و با توجه به پیشـرفت روزافزون تکنولـوژی تولید ماکارونی در دنیا ، برآن شـدند تا با در اختیار داشـتن بهترین متخصصین ایرانی و ایتالیایی و پیشـرفته ترین ماشـین آلات ایتالیـا ) برای اولین بار در ایـران نسـبت به تولید ماکارونـی تحت لیسـانـس والدیگـرانو ایتالیـاFAVAروز دنیا ( با هدف عرضـه محصـولی با کیفیت برتر و قیمت مناسـب در انواع مختلف اقدام نمایند "}</p>
                </div>
                <div className="w-[50%] p-16"><img src="/about.jpg" className="w-full" alt="" /></div>
            </div>
        </div>
    )
}