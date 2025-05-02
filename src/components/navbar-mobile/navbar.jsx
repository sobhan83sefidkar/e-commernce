import "./navbar.css"
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ setOpenMenu, openMenu }) {
    const navigate = useNavigate()
    const [bracelet, setBracelet] = useState(false)
    const [products, setProducts] = useState(false)
    return (
        <>
            <div className={`${openMenu ? "open" : "close"} cover fixed top-0 left-0`} onClick={() => setOpenMenu(false)}>

            </div>
            <div className={`navbar-mobile flex justify-end fixed top-0 left-0 w-[340px] xsmmax:w-full h-full z-40 ${openMenu ? "open" : ""}`}>
                <div className={`navbar-mobile-container w-[340px] h-full bg-[rgb(245,218,194)] z-50`}>
                    <div className=" w-full h-full">
                        <div className=" py-3 px-1" onClick={() => setOpenMenu(false)}>
                            <IoCloseSharp size={25} />
                        </div>
                        <ul className="menus flex flex-col">
                            <li className=" p-3"><Link to={"/"}>صفحه اصلی</Link></li>
                            <li className=" p-3">
                                <div className=" w-full h-full flex justify-between items-center cursor-pointer" onClick={() => setProducts(!products)}>
                                    <span>محصولات</span>
                                    <span className={`${products ? "rotate-[-90deg]" : ""} transition-[0.3s]`}><IoIosArrowBack /></span>
                                </div>
                                <ul className={`products-menu ${products ? "open" : ""} overflow-hidden border-r-[1px] border-[rgba(128,128,128,0.336)]`}>
                                    <li onClick={() => navigate("/products")} className=" p-3 ">همه محصولات</li>
                                    <li className=" p-3 ">انگشتر</li>
                                    <li className=" p-3">
                                        <div className="w-full h-full flex justify-between items-center cursor-pointer" onClick={() => setBracelet(!bracelet)}>
                                            <span>دستبند</span>
                                            <span className={`${bracelet ? "rotate-[-90deg]" : ""} transition-[0.3s] `}><IoIosArrowBack /></span>
                                        </div>
                                        <ul className={`bracelet ${bracelet ? "open" : ""} overflow-hidden border-r-[1px] border-[rgba(128,128,128,0.336)]`}>
                                            <li className=" p-3">مردانه</li>
                                            <li className=" p-3">زنانه</li>
                                            <li className=" p-3">کادویی</li>
                                        </ul>
                                    </li>
                                    <li className=" p-3">گردن بند</li>
                                    <li className=" p-3 ">ساعت</li>
                                </ul>
                            </li>
                            <li className=" p-3">درباره ما</li>
                            <li className=" p-3">تماس با ما</li>
                            <li className=" p-3" onClick={() => navigate("/login")}>ورود / ثبت نام</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;