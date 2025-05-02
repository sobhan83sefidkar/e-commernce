import SavedLocations from "../savedLocations/savedLocations";

function Location() {
    return (
        <div className="location w-full h-auto bg-[rgb(247,233,222)] rounded-md">
            <div className="location-container w-full h-full py-5">
                <SavedLocations/>
                <h1 className=" text-xl px-5 my-5">تایین آدرس</h1>
                <form className=" px-8">
                    <div className=" smmax:flex-col w-full flex justify-start px-5 gap-5">
                        <div className="w-52 flex flex-col">
                            <span>نام گیرنده :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="سبحان" />
                        </div>
                        <div className="w-52 flex flex-col">
                            <span>نام خانوادگی گیرنده :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="سفیدکار" />
                        </div>
                    </div>
                    <div className=" smmax:flex-col w-full flex justify-start p-5 gap-5">
                        <div className="w-52 flex flex-col">
                            <span>شماره مبایل گیرنده :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="0927481901" />
                        </div>
                    </div>
                    <div className=" smmax:flex-col w-full flex justify-start px-5 gap-5">
                        <div className=" w-52 flex flex-col">
                            <span>استان :</span>
                            <select >
                                <option value="">خراسان رضوی</option>
                            </select>
                        </div>
                        <div className="w-52 flex flex-col">
                            <span>شهر :</span>
                            <select >
                                <option value="">خراسان رضوی</option>
                            </select>
                        </div>
                    </div>
                    <div className=" w-full p-5">
                        <span>آدرس</span>
                        <textarea className=" w-full" name="" id="" placeholder="محل منزل خود را وارد کنید"></textarea>
                    </div>
                    <div className=" smmax:flex-col w-full flex justify-start px-5 gap-5">
                        <div className="w-52 flex flex-col">
                            <span>پلاک :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="3" />
                        </div>
                        <div className="w-52 flex flex-col">
                            <span>واحد :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="2" />
                        </div>
                    </div>
                    <div className=" smmax:flex-col w-full flex justify-start p-5 gap-5">
                        <div className="w-52 flex flex-col">
                            <span>کدپستی :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="0927481901" />
                        </div>
                        <div className="w-52 flex flex-col">
                            <span>تلفن ثابت :</span>
                            <input className=" rounded-md py-1 px-2" type="text" placeholder="05132178602" />
                        </div>
                    </div>
                    <div className=" w-full px-5 py-3">
                        <button className="bg-teal-500 hover:bg-teal-600 transition-all py-2 px-5 mt-5 rounded-lg text-white">ذخیره آدرس</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Location;