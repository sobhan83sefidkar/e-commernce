import { FaRegUserCircle } from "react-icons/fa";
import "./login.css"
import { useState } from "react";
function Login() {
    const [signUp, setSignUp] = useState(false)
    const [signIn, setSingIn] = useState(true)


    const login = (e) => {
        e.preventDefault()
        setSignUp(!signUp)
        setSingIn(!signIn)
    }
    const register = (e) => {
        e.preventDefault()
        setSignUp(!signUp)
        setSingIn(!signIn)
    }
    return (
        <div className="login w-full h-auto">
            <div className="login-container w-full h-[100vh] flex items-center justify-center relative overflow-hidden">
                <div className={`sign-up ${signUp ? "active" : "disactive"} py-5 px-7 rounded-lg bg-gray-700 text-white w-72 h-[390px] absolute top-[25%]`}>
                    <form className=" flex flex-col items-center justify-evenly w-full h-full">
                        <div className=" border-b border-gray-300 flex items-center justify-center flex-col">
                            <FaRegUserCircle size={50} />
                            <span>ثبت نام کاربر</span>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <label htmlFor="phone">نام کاربری</label>
                            <input className=" rounded-md py-1 px-2" id="username" type="text" placeholder="sobhan" />
                            <label htmlFor="phone">شماره موبایل</label>
                            <input className=" rounded-md py-1 px-2" id="username" type="text" placeholder="09012345678" />
                            <button className="bg-teal-500 hover:bg-teal-600 transition-all py-2 px-5 mt-5 rounded-lg text-white">ثبت نام</button>
                            <button onClick={(e) => register(e)}>ورود</button>
                        </div>
                    </form>
                </div>
                <div className={`sign-in ${signIn ? "active" : "disactive"} py-5 px-7 rounded-lg bg-gray-700 text-white w-72 h-[390px] absolute top-[25%]`}>
                    <form className=" flex flex-col items-center justify-evenly w-full h-full">
                        <div className=" border-b border-gray-300">
                            <FaRegUserCircle size={50} />
                            <span>ورود کاربر</span>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <label htmlFor="phone">شماره موبایل</label>
                            <input className=" rounded-md py-1 px-2" id="username" type="text" placeholder="09012345678" />
                            <button className="bg-teal-500 hover:bg-teal-600 transition-all py-2 px-5 mt-5 rounded-lg text-white">ورود</button>
                            <button onClick={(e) => login(e)}>ثبت نام</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;