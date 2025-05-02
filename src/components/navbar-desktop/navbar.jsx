import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenMenu }) {
    const navigate = useNavigate()
    const [fixedHeader, setFixedHeader] = useState(false)

    window.addEventListener("scroll", () => {
        if (window.scrollY > 96) {
            setFixedHeader(true)
        } else {
            setFixedHeader(false)
        }
    })
    return (
        <div className="navbar z-50">
            <div className="navbar-container">
                <div className="top-navbar w-full h-24 bg-[rgb(244,236,229)] lgmax:hidden">
                    <div className=" w-full h-full flex justify-between items-end">
                        <div className=" w-auto p-4">
                            <ul className=" flex w-full h-full gap-2 text-gray-600">
                                <li className=" cursor-pointer"><FaInstagram size={25} /></li>
                                <li className=" cursor-pointer"><FaTelegram size={25} /></li>
                                <li className=" cursor-pointer"><FaTwitter size={25} /></li>
                            </ul>
                        </div>
                        <div className=" w-auto">
                            <ul className=" flex w-full h-full gap-5 text-gray-500 text-sm p-4">
                                <li className=" py-1 cursor-pointer">فروشگاه</li>
                                <li className=" py-1 cursor-pointer">محصولات</li>
                                <li className=" py-1 cursor-pointer">درباره ما</li>
                                <li className=" py-1 cursor-pointer">تماس با ما</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`mid-navbar ${fixedHeader ? "fixed top-0 left-0 w-full" : ""} w-full h-[75px] bg-white rounded-full lgmax:rounded-sm z-40`}>
                    <div className="w-full h-full flex justify-between items-center">
                        <div className=" w-[25%] h-full flex items-center px-4 gap-4">
                            <button className=" lgmax:block hidden" onClick={() => setOpenMenu(true)}>
                                <GiHamburgerMenu size={25} />
                            </button>
                            <button className=" flex justify-center items-center gap-1 py-1 px-2 rounded-lg lgmax:hidden">
                                <FiUser size={25} />
                                <span onClick={() => navigate("/login")}>ورود / ثبت نام</span>
                            </button>
                            <span className=" flex gap-2 lgmax:hidden">
                                <FiPhoneCall size={25} />
                                <span>051-32178602</span>
                            </span>
                        </div>
                        <div className=" w-auto h-full relative lgmax:hidden">
                            <img className=" translate-y-[-50%] mt-[12.5%]" src="https://demo.i-wp.ir/woodland/rosegold/wp-content/uploads/Central_Curve_shadow2.svg" alt="" />
                            {/* <img className={` absolute ${fixedHeader ? "top-0" : "top-[-40px]"} left-[50%] translate-x-[-50%]`} src="../../images/Frame-1-1.png" alt="" /> */}
                            <div className={` absolute ${fixedHeader ? "top-0" : "top-[-40px]"} left-[50%] translate-x-[-50%] flex flex-col`}>
                                <img className=" mt-5" src="../../images/cat3.png" alt="" />
                                <span className=" text-xl">جواهرات مرداد</span>
                            </div>
                        </div>
                        <div className=" w-[25%] h-full flex items-center justify-center px-4 gap-4 lgmax:w-auto">
                            <button className=" flex justify-center items-center gap-1 py-1 px-2 rounded-lg">
                                <CiSearch size={25} />
                            </button>
                            <button className=" flex relative justify-center items-center gap-1 py-1 px-2 rounded-lg">
                                <CiHeart size={25} />
                                <span className=" absolute bg-gray-300 w-4 text-sm rounded-full top-[-7px] left-0">0</span>
                            </button>
                            <button onClick={() => navigate("/cart")} className=" flex relative justify-center items-center gap-1 py-1 px-2 rounded-lg">
                                <CiShoppingCart size={25} />
                                <span className=" absolute bg-gray-300 w-4 text-sm rounded-full top-[-7px] left-0">0</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`botton-navbar ${fixedHeader ? "fixed top-[73px] left-0 " : ""} w-full h-14 flex justify-center lgmax:hidden z-30 `}>
                    <div className=" w-[85%] h-full bg-gray-700 rounded-b-full flex justify-between max-w-[1058px]">
                        <ul className=" flex w-auto h-full gap-5 text-white text-sm px-4 items-center mx-3">
                            <li className=" py-1 cursor-pointer"><Link to={"/"}>صفحه اصلی</Link></li>
                            <li className=" py-1 cursor-pointer"><Link to={"/products"}>محصولات</Link></li>
                            <li className=" py-1 cursor-pointer"><Link to={"/"}>فروشگاه</Link></li>
                            <li className=" py-1 cursor-pointer"><Link to={"/"}>تماس با ما</Link></li>
                        </ul>
                        <ul className=" flex w-auto h-full gap-5 text-white text-sm px-4 items-center mx-3">
                            <li className=" py-1 cursor-pointer">انگشتر</li>
                            <li className=" py-1 cursor-pointer">دستبند</li>
                            <li className=" py-1 cursor-pointer">گوشواره</li>
                            <li className=" py-1 cursor-pointer">ساعت</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;