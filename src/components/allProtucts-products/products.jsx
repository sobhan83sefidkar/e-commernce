import "./products.css"
import 'rsuite/RangeSlider/styles/index.css';
import { useState, useEffect } from "react";
import { productsData } from "../../data";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GoCommentDiscussion } from "react-icons/go";
import { BiDetail } from "react-icons/bi";
import ReactPaginate from "react-paginate";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import PageAddress from "../pageAddress/pageAddress";
import { FaFilter } from "react-icons/fa";



function AllProducts({setOpenFiltering}) {

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

    //PAGINATION-------------------
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(productsData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(productsData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % productsData.length;
        setItemOffset(newOffset);
    };
    //--------------------------------
    return (
        <div className="products-items flex flex-col justify-center items-center">
            <div className=" flex w-full px-20 gap-5 items-center mdmax:px-3">
                <button onClick={() => setOpenFiltering(true)} className=" flex items-center gap-2 py-2 px-3 border border-gray-500 rounded-md mdmin:hidden">
                    <FaFilter />
                    <span>فیلتر</span>
                </button>
                <PageAddress mainPage={"صفحه اصلی"} currentPage={"محصولات"} />
            </div>
            <div className=" w-full h-full flex  gap-5 flex-wrap justify-center py-5">
                {currentItems.map((item, i) => {
                    return (
                        <div onMouseLeave={() => setHovering(false)} onMouseEnter={() => {
                            setHovering(true)
                            setCounter(0)
                        }} key={i} className="product-item min-w-[215px] max-w-[215px] smmax:min-w-[170px] smmax:max-w-[170px] h-[250px] bg-white overflow-hidden snap-center rounded-md">
                            <div className="product-item-container w-full h-full relative flex flex-col gap-4 justify-center items-center">
                                <span className="product-name absolute top-[70px] font-bold">{item.name}</span>
                                <img className=" img-product absolute" src={item.img} alt="" />
                                <ul className=" w-full">
                                    <li className=" mt-[80px] text-right">{item.price}تومن</li>
                                    <li className=' text-right'>باقی مانده : {item.instock}</li>
                                    <li style={{ direction: "rtl" }} className=" flex items-center gap-1"><GoCommentDiscussion />{item.comment[counter] === undefined ? "پایان نظرات" : item.comment[counter].length >= 10 ? `${item.comment[counter].slice(0, 10)}...` : item.comment[counter]}</li>
                                    <li className="cursor-pointer text-right flex items-center justify-end my-1" style={{ direction: "ltr" }}>
                                        <Link to={`/product/${item.id}`} className=' text-[15px] text-teal-700' >جزعیات بیشتر</Link>
                                        <BiDetail fill='teal' size={20} />
                                    </li>
                                    <li style={{ direction: "rtl" }} className=" flex gap-5">
                                        <CiHeart size={20} />
                                        <CiShoppingCart size={20} />
                                        <LiaExchangeAltSolid size={20} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='page'>
                <ReactPaginate
                    breakLabel='...'
                    nextLabel={<IoIosArrowDropleft />}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel={<IoIosArrowDropright />}
                    renderOnZeroPageCount={null}
                    containerClassName='pagination'
                    pageClassName='page-num'
                    previousLinkClassName='prev'
                    nextLinkClassName='next'
                    activeClassName='active'
                />
            </div>
        </div>
    );
}

export default AllProducts;