function AboutShop() {
    return (
        <div className="about-shop w-full h-auto">
            <div className="about-shop-container w-full h-auto] flex lgmax:flex-col-reverse">
                <div className=" w-[70%] lgmax:w-full px-4 flex flex-col items-center justify-center ">
                    <div>
                        <h2 className=" text-2xl my-3">درباره جواهری ما</h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                        <button className=" border border-gray-500 py-2 px-5 rounded-md my-4">تماس با ما</button>
                    </div>
                    <div className=" flex gap-3 bg-[rgb(218,186,151)] p-5 rounded-md mdmax:flex-col"> 
                        <div className=" flex gap-3">
                            <div className=" w-[100px] flex flex-col justify-center items-center">
                                <span className=" text-xl">+15</span>
                                <span className=" text-sm mdmax:text-xs font-bold">سابقه</span>
                            </div>
                            <div className=" flex flex-col justify-between">
                                <span className=" text-sm">لورم ایپسوم متن ساختگی</span>
                                <p className=" text-xs text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
                            </div>
                        </div>
                        <div className=" flex gap-3">
                            <div className=" w-[100px] flex flex-col justify-center items-center ">
                                <span className=" text-xl">+98</span>
                                <span className=" text-sm mdmax:text-xs font-bold">رضایت مشتریان</span>
                            </div>
                            <div className=" flex flex-col justify-between">
                                <span className=" text-sm">لورم ایپسوم متن ساختگی</span>
                                <p className=" text-xs text-gray-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <img className=" px-3" src="../../images/slider2.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default AboutShop;