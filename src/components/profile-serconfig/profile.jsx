import { useNavigate } from "react-router-dom";
import "./profile.css"

function Profile() {
    const navigate = useNavigate()
    return (
        <div className="profile">
            <div className="profile-container px-3 py-3 flex flex-col justify-between items-start">
                <p>
                    سلام سبحان عزیز
                    در صفحه حساب کاربری خود شما میتوانید سفارشات, اعتبارات و لیست علاقه‌مندی های خود را مشاهده کنید.
                    همچنین میتوانید آدرس ها خود را مدیریت کرده و اطلاعات فردی را تکمیل یا ویرایش کنید.
                </p>
                <button className=" py-3 px-4 bg-teal-600 hover:bg-teal-500 transition-all text-white rounded-md mt-28" onClick={() => navigate("/userconfig/editinfo")}>ویرایش اطلاعات</button>
            </div>
        </div>
    );
}

export default Profile;