import { useEffect, useState , useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import "./header.css"
function Header() {
    const [activeIndex, setActiveIndex] = useState(0)
    const items = ["../../images/slider4.png", "../../images/slider3.png", "../../images/slider5.png"]
    let timer;

    const getClass = (index) => {
        if (index === activeIndex) {
            return "before"
        } else if (index === (activeIndex + 1) % items.length) {
            return "active"
        } else if (index === (activeIndex - 1 + items.length) % items.length) {
            return "after"
        }
    }
    const next = () => {
        setActiveIndex((prev) => (
            (prev + 1) % items.length
        ))
        clearInterval(timer)
    }
    const before = () => {
        setActiveIndex((prev) => (
            (prev - 1 + items.length) % items.length
        ))
        clearInterval(timer)
    }
    useEffect(() => {
        timer = setInterval(() => {
            next()
        }, 2000);

        return () => {
            clearInterval(timer)
        }
    }, [timer , activeIndex])

   
    return (
        <div className={`header w-full h-[100vw] max-h-[430px] flex overflow-hidden`}>
            <button className="z-10 mx-1 px-3" onClick={before}>
                <MdArrowForwardIos />
            </button>
            <div className="header-container w-full h-auto flex items-center justify-center py-16 relative">
                {
                    items.map((item, index) => {
                        return (
                            <img key={index} className={`${getClass(index)} w-[14vw] 2xlmax:w-[20vw] lgmax:w-[30vw] mdmax:w-[50vw] smmax:w-[70vw] rounded-2xl absolute`} src={item} alt="" />
                        )
                    })
                }
            </div>
            <button className="z-10 mx-1 px-3" onClick={next}>
                <IoIosArrowBack />
            </button>
        </div>
    );
}

export default Header;