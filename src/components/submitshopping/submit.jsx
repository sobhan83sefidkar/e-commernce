import "./submit.css"

function SubmitShopping() {
    const card = [
        { text: "زرین پال", icon: "../../images/zarin.png", active: true },
        { text: "ملت", icon: "../../images/mellat.png", active: false },
    ]
    return (
        <div className="submit-shopping w-full h-auto">
            <div className="submit-shopping-container w-full h-full flex flex-col gap-7">

                <h2 className=" text-xl text-center border-b border-gray-300">انتخاب درگاه گرداخت</h2>
                <div className=" w-full h-full flex justify-evenly smmax:flex-col items-center gap-5 ">
                    {
                        card.map((item, i) => {
                            return (
                                <div key={i} className="payment-gateway">
                                    <div className="bg flex justify-center items-center flex-col gap-6">
                                        <img className=" w-28" src={item.icon} alt="" />
                                        <span>{item.text}</span>
                                    </div>
                                    {
                                        item.active &&
                                        <div className="blob"></div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SubmitShopping;