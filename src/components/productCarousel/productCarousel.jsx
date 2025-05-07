import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GoCommentDiscussion } from "react-icons/go";
import { BiDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import "./productCarousel.css"

function ProductCarousel({ items, title, side, imgSrc }) {
    const [hovering, setHovering] = useState(false)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        let interval;
        if (hovering) {
            interval = setInterval(() => {
                setCounter(counter + 1)
            }, 2000);
        } else {
            setCounter(0)
        }

        return () => {
            clearInterval(interval)
        }
    }, [hovering, counter])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        arrows: true,
        autoplay: 4000,
        responsive: [
            {
                breakpoint: 1159,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                },
            },
            {
                breakpoint: 355,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots : false
                },
            },
        ],
    };
    return (
        <div className=' my-4'>
            <div className="offer-title w-full h-auto flex items-center justify-center text-center py-4 my-2">
                <img src="../../images/ring.png" alt="" />
                <h2 className="text-3xl">{title}</h2>
            </div>
            <div className={`carousel flex ${side === "ltr" ? "flex-row-reverse" : ""}`}>
                <div className=" max-w-[20%] min-w-[20%] h-auto rounded-md lgmax:hidden">
                    <img className=" w-full h-full" src={imgSrc} alt="" />
                </div>
                <div className=' w-[80%] bg-[rgb(218,186,151)] rounded-md lgmax:w-full py-4 pb-7 flex justify-center items-center'>
                    <div className="carousel-container mdmax:w-full w-[93%]">
                        <Slider {...settings}>
                            {items.map((item, i) => (
                                <div onMouseLeave={() => setHovering(false)} onMouseEnter={() => {
                                    setHovering(true)
                                    setCounter(0)
                                }} key={i} className="product-item translate-x-5 min-w-[215px] max-w-[215px] smmax:min-w-[170px] smmax:max-w-[170px] h-[250px] bg-white overflow-hidden snap-center rounded-md">
                                    <div className="product-item-container w-full h-full relative flex flex-col gap-4 justify-center items-center">
                                        <span className="product-name absolute top-[70px] font-bold">{item.name}</span>
                                        <img className=" img-product absolute" src={item.img} alt="" />
                                        <ul className=" w-full">
                                            <li className=" mt-[80px] text-right">{item.price}تومن</li>
                                            <li className=' text-right'>باقی مانده : {item.instock}</li>
                                            <li style={{ direction: "rtl" }} className=" flex items-center gap-1"><GoCommentDiscussion />{item.comment[counter] === undefined ? "پایان نظرات" : item.comment[counter].length >= 10 ? `${item.comment[counter].slice(0, 10)}...` : item.comment[counter]}</li>
                                            <li className="cursor-pointer text-right flex items-center justify-end my-1">
                                                <Link to={`/product/${item.id}`} className=' text-[15px] text-teal-700' >جزعیات بیشتر</Link>
                                                <BiDetail fill='teal' size={20}/>
                                            </li>
                                            <li style={{ direction: "rtl" }} className=" flex gap-5">
                                                <CiHeart size={20} />
                                                <CiShoppingCart size={20} />
                                                <LiaExchangeAltSolid size={20} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCarousel;
