import Header from '../../components/header-home/header'
import CategoryHome from '../../components/category-home/category'
import ProductCarousel from '../../components/productCarousel/productCarousel'
import { productsData } from '../../data'
import './home.css'
import AboutShop from '../../components/aboutShop-home/aboutShop'
import Parallax from '../../components/parralax-home/parallax'

function Home() {
  const mansJewelry = productsData.filter((item) => item.categoty.includes("mans"))
  const giftJewelry = productsData.filter((item) => item.categoty.includes("gift"))
  return (
    <div className='home w-full h-auto'>
      <Header />
      <CategoryHome />
      <ProductCarousel
        items={mansJewelry}
        side={'rtl'}
        title={'جواهرات مردانه'}
        imgSrc={'../../images/mans-jewelry.png'}
      />
      <ProductCarousel
        items={giftJewelry}
        side={'ltr'}
        title={'جواهرات کادویی'}
        imgSrc={'../../images/giftjewelry.png'}
      />
      <AboutShop />
      <Parallax/>

      {/* https://uiverse.io/ilkhoeri/swift-panda-38 */}
      {/* https://uiverse.io/Smit-Prajapati/curly-goose-86 */}
      {/* https://uiverse.io/SmookyDev/odd-grasshopper-27 */}
      {/* //loader */}
      {/* https://uiverse.io/shadowmurphy/big-lionfish-7 */}
      {/* share buttons */}
      {/* https://uiverse.io/david-mohseni/brave-shrimp-86 */}
      {/*   */}
      {/* https://uiverse.io/Gaurang7717/witty-gecko-80 */}
      {/* https://uiverse.io/vinodjangid07/wonderful-sloth-14 */}
      {/* https://uiverse.io/mRcOol7/massive-bird-37 */}  
      {/* like button */}
      {/* https://uiverse.io/LilaRest/loud-walrus-26 */}
      {/* https://uiverse.io/Priyanshu02020/popular-puma-87 */}
      {/* add button */}
      {/* https://uiverse.io/kennyotsu-monochromia/tidy-wasp-4 */}
      {/* responsive botton menu */}
      {/* https://uiverse.io/akshat-patel28/brown-panther-60 */}
      {/* delete button */}
      {/* https://uiverse.io/seyed-mohsen-mousavi/warm-dingo-23 */}
    </div>
  )
}

export default Home
