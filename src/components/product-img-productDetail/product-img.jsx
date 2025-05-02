import "./product-img.css"
import React from "react";
import { useState } from "react";

function ProductIms() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [cards, setCards] = useState(["../../images/image.png", "../../images/image3.png", "../../images/image4.png"]); // لیست کارت‌ها
    const [clickedIndex, setClickedIndex] = useState(null); // کارت انتخاب‌شده
    const moveToEnd = (index) => {
        setClickedIndex(index); // کارت کلیک‌شده را مشخص می‌کنیم

        // پس از پایان انیمیشن (500ms)، ترتیب کارت‌ها را تغییر می‌دهیم
        setTimeout(() => {
            const updatedCards = [...cards];
            const removedCard = updatedCards.splice(index, 1);
            updatedCards.push(removedCard[0]);
            setCards(updatedCards);
            setClickedIndex(null); // ریست کردن حالت کلیک‌شده
            setActiveIndex((prev) => (
                (prev + 1) % cards.length
            ))
        }, 500);
    };

    return (
        <div className="product-img w-full h-full smmax:h-[500px]">
            <div className="product-img-container flex flex-col w-full h-full">
                <div className=" relative w-full h-full flex items-center justify-center">
                    {cards.map((card, index) => (
                        <div
                            key={card}
                            className={`card ${index === clickedIndex ? "clicked" : ""} flex flex-col justify-center items-center`}
                            style={{
                                transform: getCardTransform(index),
                                zIndex: index === clickedIndex ? cards.length + 1 : cards.length - index,
                                opacity: index === clickedIndex ? 0 : 1,
                            }}
                            onClick={() => moveToEnd(index)}>
                            <img className=" hover:scale-125" style={{ transition: "0.7s" }} src={card} alt="" />
                            <span className=" text-gray-500">برای مشاهده عکس بعدی کلیک کنید</span>
                        </div>
                    ))}
                </div>
                <div className=" flex items-center justify-center gap-3">
                    {
                        cards.map((item, index) => {
                            return (
                                <div key={index} className=" text-5xl" style={index === activeIndex ? { opacity: "1" } : { opacity: "0.2" }}>.</div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}
const getCardTransform = (index) => {
    const yOffset = index * 30; // فاصله بین کارت‌ها
    const scale = 1 - index * 0.1; // تغییر سایز
    return `translateY(-${yOffset}px) scale(${scale})`;
};

export default ProductIms;