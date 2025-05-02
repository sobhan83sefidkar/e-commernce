import { useState } from "react"
import { RangeSlider } from 'rsuite';
import { IoIosArrowBack } from "react-icons/io";
import "./products.css"
import { IoCloseSharp } from "react-icons/io5";



function Filtering({setOpenFiltering , openFiltering}) {
    const [priceFiltering, setPriceFiltering] = useState(true)
    const [statFiltering, setStatFiltering] = useState(true)
    const [brandFiltering, setBrandFiltering] = useState(true)
    const [colorFiltering, setcolorFiltering] = useState(true)
    
    return (
        <>
            <div onClick={() => setOpenFiltering(false)} className={`cover ${openFiltering ? "open" : "close"} fixed top-0 left-0 w-full h-full mdmin:hidden`}></div>
            <div className={`filtering ${openFiltering ? "open" : ""}`}>
                <div className=" py-3 px-1 flex justify-end mdmin:hidden">
                    <button onClick={() => setOpenFiltering(false)}>
                        <IoCloseSharp size={25} />
                    </button>
                </div>
                <div className="filtering-container overflow-y-auto">
                    <ul className=" px-2 bg-gray-100 rounded-md">
                        <li className=" py-3 border-b-[1px] border-gray-400">
                            <span className="filter-title p-1 rounded-sm" onClick={() => setPriceFiltering(!priceFiltering)}>
                                فیلتر قیمت
                                <IoIosArrowBack />
                            </span>
                            <ul className={` filter-item ${priceFiltering ? "open p" : ""}`}>
                                <li>
                                    <RangeSlider defaultValue={[0, 10000000]} min={100000} max={10000000} />
                                </li>
                            </ul>
                        </li>
                        <li className=" py-3 border-b-[1px] border-gray-400">
                            <span className="filter-title p-1 rounded-sm" onClick={() => setStatFiltering(!statFiltering)}>فیلتر وضعیت
                                <IoIosArrowBack />
                            </span>
                            <ul className={` filter-item ${statFiltering ? "open" : ""}`}>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>موجود</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>معروف ها</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>جدیدها</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>گرون ها</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>ارزون ها</span>
                                </li>
                            </ul>
                        </li>
                        <li className=" py-3 border-b-[1px] border-gray-400">
                            <span className="filter-title p-1 rounded-sm" onClick={() => setBrandFiltering(!brandFiltering)}>فیلتر برند
                                <IoIosArrowBack />
                            </span>
                            <ul className={` filter-item ${brandFiltering ? "open" : ""}`}>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>دیور</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>زارا</span>
                                </li>
                            </ul>
                        </li>
                        <li className=" py-3 border-b-[1px] border-gray-400">
                            <span className="filter-title p-1 rounded-sm" onClick={() => setcolorFiltering(!colorFiltering)}>فیلتر دسته بندی
                                <IoIosArrowBack />
                            </span>
                            <ul className={` filter-item ${colorFiltering ? "open" : ""}`}>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>انگشتر</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>دستبند</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>گوشواره</span>
                                </li>
                                <li className=" flex gap-2 py-2">
                                    <input type="checkbox" />
                                    <span>ساعت مچی</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Filtering;