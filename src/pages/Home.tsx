import Header from '../components/Header';
import Product from '../containers/Product';
import ProductGallery from '../components/ProductCard';
import AboutCompany from '../containers/AboutCompany';
import ProductBenefits from '../containers/ProductBenefits';
import News from '../containers/News';
import SiyobCompany from '../containers/SiyobCompany';
import Footer from '../components/Footer';

function Home() {
    return (
        <div> 
            <div className="relative w-full h-[900px]">
                <div className="bg-[url('/HeaderImg.png')] bg-no-repeat bg-cover bg-center w-full h-[800px]">
                    <Header/>
                    <div className="flex items-center justify-center flex-col text-[#00A23A]">
                        <h1 className="text-[48px] lg:text-[128px] font-bold">PUREMILKY</h1>
                        <h3 className="text-[15px] lg:text-[20px] font-medium">МОЛОЧНАЯ ПРОДУКЦИЯ</h3>
                        <h3 className="text-[15px] lg:text-[20px] font-medium">ВЫСШЕГО КАЧЕСТВА</h3>
                    </div>
                    <div className="lg:bg-[url('/UnderHeaderImg.png')] bg-no-repeat bg-cover bg-center absolute bottom-0 w-full h-[180px]"></div>
                </div>
            </div>
            <div className="container">
                <Product/>
                <ProductGallery/>
                <AboutCompany/>
                <ProductBenefits/>
                <News/>
                <SiyobCompany/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home