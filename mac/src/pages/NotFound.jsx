import { useNavigate } from "react-router-dom"

export const NotFound = () => {
    const navigate = useNavigate();
    const gotohome = () => {
        navigate("/")
    }
    return (
        <div className="w-full flex flex-col justify-center items-center py-10">
            <h1 className="py-1">صفحه موردنظر یافت نشد</h1>
            <p className="py-2">صفحه ای که شما به دنبال آن هستید وجود ندارد . از طریق دکمه زیر می توانید به صفحه اصلی بروید...</p>
            <button className="p-3 mt-2 rounded-xl cursor-pointer bg-red-200" onClick={gotohome}>رفتن به صفحه اصلی</button>
        </div>
    )
}