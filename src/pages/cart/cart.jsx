import { IoIosArrowBack } from "react-icons/io";
import "./cart.css"
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function getIndex(){
    if(JSON.parse(localStorage.getItem("index"))){
        return JSON.parse(localStorage.getItem("index"))
    }else{
        return localStorage.setItem("index" , JSON.stringify(1))
    }
}

function Cart() {
    const navigate = useNavigate()
    const [index , setIndex] = useState(getIndex())
    const list = [
        { text: "تعداد محصولات", value: 2 },
        { text: "جمع کل", value: 200000 },
        { text: "تخفیفات", value: 50000 },
        { text: "ارزش افزوده", value: 2000 },
        { text: "هزینه ارسال", value: 0 },
    ]
    useEffect(() => {
        return () => localStorage.setItem("index" , JSON.stringify(1))
    } , [])
    const handleChangeIndex = () => {
        localStorage.setItem("index" , JSON.parse(localStorage.getItem("index")) + 1)
        const chIndex = JSON.parse(localStorage.getItem("index"))
        setIndex(chIndex)
    }
    const handleChangeIndex2 = (page) => {
        localStorage.setItem("index" , JSON.stringify(page))
        const chIndex = JSON.parse(localStorage.getItem("index"))
        setIndex(chIndex)
    }
    useEffect(() => {
        if(index === 1){
            navigate("/cart")
        }else if(index === 2){
            navigate("/cart/shipping")
        }else if(index >= 3){
            navigate("/cart/submit")
        }
    } , [index])

    return (
        <div className="cart w-full h-auto">
            <div className="cart-container w-full h-full">
                <div className="cart-address w-full flex py-20 items-center justify-center gap-5">
                    <h2 onClick={() => {
                        navigate("/cart")
                        handleChangeIndex2(1)
                        }} className={` text-2xl mdmax:text-[15px] cursor-pointer ${index >= 1 ? "opacity-[1]" : ""}`}>سبدخرید</h2>
                    <IoIosArrowBack />
                    <h2 onClick={() => {
                        navigate("/cart/shipping")
                        handleChangeIndex2(2)
                        }} className={` text-2xl mdmax:text-[15px] cursor-pointer ${index >= 2 ? "opacity-[1]" : "opacity-30 pointer-events-none"}`}>اطلاعات ارسال</h2>
                    <IoIosArrowBack />
                    <h2 onClick={() => {
                        navigate("/cart/submit")
                        handleChangeIndex2(3)
                        }} className={` text-2xl mdmax:text-[15px] cursor-pointer ${index >= 3 ? "opacity-[1]" : "opacity-30 pointer-events-none"}`}>تایید و پرداخت</h2>
                </div>
                <div className=" w-full h-full cart-products">
                    <div className="outlet">
                        <Outlet />
                    </div>
                    <div className="detail p-2 flex flex-col border">
                        <h3 className=" border-b border-gray-300 py-3 font-bold text-xl text-center">جزعیات سفارش</h3>
                        <ul>
                            {
                                list.map((item, i) => {
                                    return (
                                        <li key={i} className=" w-full flex justify-between py-3 border-b border-gray-300">
                                            <span>{item.text} :</span>
                                            <span>{item.value}</span>
                                        </li>
                                    )
                                })
                            }
                            <li className=" font-bold w-full flex justify-between py-3 border-b border-gray-300">
                                <span>قابل پرداخت :</span>
                                <span>2000000</span>
                            </li>
                        </ul>
                        <div className=" w-full flex justify-center py-5">
                            <button onClick={handleChangeIndex} className="submitBtn"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;