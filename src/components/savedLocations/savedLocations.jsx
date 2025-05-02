import { IoCloseSharp } from "react-icons/io5";

function SavedLocations() {
    return (
        <div className="saved-locations w-full h-auto">
            <div className="saved-locations-container w-full h-full px-5">
                <h1 className=" text-xl">آدرس های ذخیره شده</h1>
                <table className=" w-full mt-5 border-b-[1px] border-gray-400">
                    <thead>
                        <tr className=" text-center">
                            <th className=" p-3">نام خانوادگی</th>
                            <th className=" p-3">شهر</th>
                            <th className=" p-3">آدرس</th>
                            <th className=" p-3">موبایل</th>
                            <th className=" p-3">حذف</th>
                        </tr>
                    </thead>
                    <tbody className=" hover:bg-gray-300 cursor-pointer ">
                        <tr className=" text-center">
                            <td className=" py-2 px-2">سفیدکار</td>
                            <td className=" py-2 px-2">مشهد</td>
                            <td className=" py-2 px-2 text-sm">طبرسی شمالی 38 طباطبایی 4 سه راه دم پلاک 131</td>
                            <td className=" py-2 px-2">09017409939</td>
                            <td><button><IoCloseSharp fill="crimson" size={20} /></button></td>
                        </tr>
                    </tbody>
                    <tbody className=" hover:bg-gray-300 cursor-pointer bg-gray-300">
                        <tr className=" text-center">
                            <td className=" py-2 px-2">سفیدکار</td>
                            <td className=" py-2 px-2">مشهد</td>
                            <td className=" py-2 px-2 text-sm">طبرسی شمالی 38 طباطبایی 4 سه راه دم پلاک 131</td>
                            <td className=" py-2 px-2">09017409939</td>
                            <td><button><IoCloseSharp fill="crimson" size={20} /></button></td>
                        </tr>
                    </tbody>
                    <tbody className=" hover:bg-gray-300 cursor-pointer ">
                        <tr className=" text-center">
                            <td className=" py-2 px-2">سفیدکار</td>
                            <td className=" py-2 px-2">مشهد</td>
                            <td className=" py-2 px-2 text-sm">طبرسی شمالی 38 طباطبایی 4 سه راه دم پلاک 131</td>
                            <td className=" py-2 px-2">09017409939</td>
                            <td><button><IoCloseSharp fill="crimson" size={20} /></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SavedLocations;