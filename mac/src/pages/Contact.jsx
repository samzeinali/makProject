
export const Contact = () => {
    return (
        <div className="w-full flex-col items-center">
                        <div className="about__img relative w-full flex justify-center items-center h-[500px]">
                <h1 className="z-20 text-zinc-100 text-[4rem] font-bold">تماس با ما</h1>
                <div className="z-10 w-full bg-zinc-900 opacity-80 absolute top-0 right-0 h-[500px]"></div>
            </div>
            <div className="w-full flex flex-row px-14">
                <form className="w-[50%] py-8">
                    <p className="py-2">نام : </p>
                    <input className="contact__input" type="text" placeholder="نام"/>
                    <p className="py-2">نام خانوادگی :</p>
                    <input className="contact__input" type="text" placeholder="نام خانوادگی"/>
                    <p className="py-2">ایمیل : </p>
                    <input className="contact__input" type="email" placeholder="ایمیل"/>
                    <textarea name="textMassage" id="1" cols="30" rows="10" className="contact__input">پیام خود را بنویسید</textarea>
                    <button className="bg-red-500 px-12 py-4 border-none rounded-xl cursor-pointer hover:bg-red-600 hover:border-[1px] hover:border-black hover:border-solid transition ease-linear flex justify-center items-center">ارسال پیام</button>
                </form>
                <div className="py-8">
                    <h3 className="py-8 inline-block text-zinc-800 text-xl">آدرس کارخانه : </h3>
                    <p className="inline text-[1rem] px-8 text-zinc-700">تهران - ونک - پلاک ۱</p>
                        <br />
                    <h3 className="py-8 inline-block text-zinc-800 text-xl">شماره تماس دفتر : </h3>
                    <p className="inline text-[1rem] px-8 text-zinc-700">۰۹۳۸۹۴۹۳۴۱۰ - ۰۲۱ ۲۲۳۳۱۱۴۴</p>
                        <br />
                    <h3 className="py-8 inline-block text-zinc-800 text-xl">ایمیل ما : </h3>
                    <p className="inline text-[1rem] px-8 text-zinc-700">saamzeinali@gmail.com</p>
                        <br />
                    <h3 className="py-8 inline-block text-zinc-800 text-xl">ساعت پاسخگویی : </h3>
                    <p className="inline text-[1rem] px-8 text-zinc-700">روزهای شنبه تا چهارشنبه از ۹ تا ۱۷ - روزهای پنجشنبه از ۹ تا ۱۳</p>
                        <br />
                </div>
            </div>
        </div>
    )
}