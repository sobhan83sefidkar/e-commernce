import { Outlet } from "react-router-dom";
import Dashbord from "../../components/dashbord-userconfig/dashbord";
import "./userconfig.css"

function UserConfig() {
    return (
        <div className="user-config w-full h-auto rounded-md overflow-hidden">
            <div className=" w-full h-full">
                <div className="title-products w-full py-20 text-center">
                    <h2 className=" text-4xl">تنظیمات کاربری</h2>
                </div>
                <div className="user-config-container bg-[rgb(247,233,222)]">
                    <Dashbord />
                    <div className="setting border border-gray-300">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserConfig;