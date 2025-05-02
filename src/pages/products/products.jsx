import AllProducts from "../../components/allProtucts-products/products";
import Filtering from "../../components/product-filtering-products/products";
import { useState } from "react";
import "./products.css"

function Products() {

    const [openFiltering , setOpenFiltering] = useState(false)
    return (
        <div className="products w-full h-auto">
            <div className="w-full h-full">
                <div className="title-products w-full py-20 text-center">
                    <h2 className=" text-4xl">محصولات</h2>
                </div>
                <div className="products-container">
                    <Filtering openFiltering={openFiltering} setOpenFiltering={setOpenFiltering}/>
                    <AllProducts setOpenFiltering={setOpenFiltering}/> 
                </div>
            </div>
        </div>
    );
}

export default Products;