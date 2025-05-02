import "./parallax.css"
import { FaInstagram } from "react-icons/fa";

function Parallax() {
    return (
        <div className="parallax w-full h-[200px] smmax:h-[300px] bg-red-500 my-5">
            <div className="parallax-container w-full h-full flex items-center">
                <div className=" flex smmax:flex-col smmax:h-full smmax:justify-center justify-between items-center mx-7 z-10 w-full">
                    <div className=" smmax:flex smmax:flex-col justify-center items-center">
                        <FaInstagram size={100} fill="crimson" />
                        <div className=" text-white">
                            <h2 className=" text-3xl smmax:text-xl">مارا در اینستاگرام دنبال کنید</h2>
                            <p>ما هروز محتوا های جالب تولید میکنیم</p>
                        </div>
                    </div>
                    <div className=" mx-6 smmax:mx-0 smmax:my-5">
                        <a href="http://sobhansefidkar.ir" className="follow-instagram border py-3 px-5 rounded-md text-white">فالو کردن</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Parallax;