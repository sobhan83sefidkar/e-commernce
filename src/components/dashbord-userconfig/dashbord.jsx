import { AiOutlineUser } from "react-icons/ai";
import "./dashbord.css"
import { FaArrowRightToBracket, FaCartShopping, FaIdBadge, FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Dashbord() {
    return (
        <div className="dashbord">
            <div className="dashbord-container">
                <ul className=" w-full h-auto">
                    <li className=" w-full py-3 border-b-[1px] border-gray-300 h-full">
                        <Link to={"/userconfig/"} className=" flex items-center gap-3 px-3 ">
                            <AiOutlineUser />
                            حساب کاربری
                        </Link>
                    </li>
                    <li className=" w-full py-3 border-b-[1px] border-gray-300 h-full">
                        <Link to={"/userconfig/orders"} className=" flex items-center gap-3 px-3 ">
                            <FaCartShopping />
                            سفارشات
                        </Link>
                    </li>
                    <li className=" w-full py-3 border-b-[1px] border-gray-300 h-full">
                        <Link to={"/userconfig/address"} className=" flex items-center gap-3 px-3 ">
                            <FaIdBadge />
                            آدرس ها
                        </Link>
                    </li>
                    <li className=" w-full py-3 border-b-[1px] border-gray-300 h-full">
                        <Link to={"/userconfig/editinfo"} className=" flex items-center gap-3 px-3 ">
                            <FaPenToSquare />
                            ویرایش اطلاعات
                        </Link>
                    </li>
                    <li className=" w-full py-3 border-b-[1px] border-gray-300 h-full">
                        <Link to={"/userconfig"} className=" flex items-center gap-3 px-3 ">
                            <FaArrowRightToBracket />
                            خروج
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Dashbord;