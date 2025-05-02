
import { FaRegCircleCheck } from "react-icons/fa6";
import "rmc-picker/assets/index.css";
import Picker from "rmc-picker/lib/Picker";
import React from "react";
import "./productInfo.css"
import { IoMdArrowDropleft } from "react-icons/io";

function ProductInfo() {
    const len = 4;
    const [value, setValue] = React.useState();

    const onChange = (value) => {
        console.log("value: ", value);
    };

    const getItems = (start) => {
        const items = [];
        for (let i = start; i < start + len; i++) {
            items.push(
                <Picker.Item value={i + ""} key={i}>
                    {i}
                </Picker.Item>
            );
        }
        return items;
    };
    const [items, setItems] = React.useState(getItems(1));

    return (
        <div className="product-info">
            <div className="product-info container w-full h-full p-5">
                <div>
                    <h2 className=" text-2xl">انگشتر مدل 1</h2>
                    <div className=" w-full border-b-[1px] border-gray-300 my-2 py-2">
                        <div className=" flex gap-2">
                            <span>دسته بندی ها :</span>
                            <span>مردانه </span>
                            ,
                            <span>کادویی</span>
                        </div>
                        <div className=" flex gap-2">
                            <span>موجودی در انبار :</span>
                            <span>10</span>
                        </div>
                    </div>
                    <div className=" flex flex-col my-2">
                        <span className=" flex items-center gap-2">
                            <FaRegCircleCheck fill="teal" />
                            تضمین کیفیت
                        </span>
                        <span className=" flex items-center gap-2">
                            <FaRegCircleCheck fill="teal" />
                            ارسال سراسری
                        </span>
                        <span className=" flex items-center gap-2">
                            <FaRegCircleCheck fill="teal" />
                            امکان لغو سفارس
                        </span>
                        <span className=" flex items-center gap-2">
                            <FaRegCircleCheck fill="teal" />
                            پرداخت مطمعن
                        </span>
                    </div>
                    <div className=" flex items-center gap-2">
                        <span>قیمت :</span>
                        <span className=" text-2xl">3,000,000</span>
                        <span className=" text-2xl">تومن</span>
                    </div>
                    <div className=" flex gap-5 my-4">
                        <div className=" flex h-[30px] items-center relative">
                            <span>سایز :</span>
                            <span className=" absolute left-[-50px]">
                                <IoMdArrowDropleft size={25} />
                            </span>
                        </div>
                        <div className="App w-24">
                            <Picker
                                selectedValue={value}
                                onValueChange={onChange}
                            >
                                {items}
                            </Picker>
                        </div>
                    </div>
                    <div className=" border-b-[1px] border-gray-300 py-2">
                        <div>
                            <button className="btn text-sm "><i className="animation"></i>افزودن به سبد<i className="animation"></i>
                            </button>
                        </div>
                    </div>
                    <div className=" flex my-2 justify-between flex-wrap">
                        <div className="like-button smmax:my-6" style={{ direction: "ltr" }}>
                            <input className="on" id="heart" type="checkbox" />
                            <label className="like" for="heart">
                                <svg
                                    className="like-icon"
                                    fill-rule="nonzero"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                                    ></path>
                                </svg>
                                <span className="like-text">لایک</span>
                            </label>
                            <span className="like-count one">68</span>
                            <span className="like-count two">69</span>
                        </div>
                        <div className="share-icons flex items-center gap-2">
                            {/* ///////////// */}
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg
                                        viewBox="0 0 496 512"
                                        height="1.6em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="white"
                                    >
                                        <path
                                            d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"
                                            fill="white"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGtel BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg viewBox="0 0 16 16" height="2.5em" className="svgIcon" fill="white">
                                        <path
                                            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGwhat BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg
                                        fill="white"
                                        className="svgIcon"
                                        viewBox="0 0 448 512"
                                        height="1.5em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGinsta BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg
                                        viewBox="0 0 320 512"
                                        height="1.3em"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svgIcon"
                                        fill="white"
                                    >
                                        <path
                                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGface BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg
                                        viewBox="0 0 24 24"
                                        height="24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGlink BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg
                                        viewBox="0 0 576 512"
                                        fill="white"
                                        height="1.6em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="BGyou BG"></span>
                            </button>
                            <button className="Btn">
                                <span className="svgContainer">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none" /><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" /></svg>
                                </span>
                                <span className="BGtwit BG"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;