import ProductComment from "../../components/product-com-productDetail/product";
import ProductDesc from "../../components/product-desc-productDetail/product";
import ProductImgs from "../../components/product-img-productDetail/product-img";
import ProductInfo from "../../components/product-info-productDetail/productInfo";
import ProductCarousel from "../../components/productCarousel/productCarousel";
import { productsData } from "../../data";
import "./product.css"


function ProductDetail() {
    return (
        <div className="product-detail w-full h-auto">
            <div className="product-detail-container w-full h-full my-10">
                <div className="PDC">
                    <ProductImgs />
                    <ProductInfo />ّ
                </div>
                <ProductDesc />
                <ProductCarousel
                    items={productsData}
                    side={'rtl'}
                    title={'محصولات مشابه'}
                    imgSrc={'../../images/mans-jewelry.png'} />
                <ProductComment/>
            </div>
        </div>
    );
}

export default ProductDetail;