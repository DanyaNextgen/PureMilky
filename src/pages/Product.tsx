import Header from '../components/Header';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

function Product() {
    return (
        <div>
            <div className="relative w-full h-[700px]">
                <div className="bg-[url('/ProductImg.png')] bg-no-repeat bg-cover bg-center w-full h-[700px]">
                    <Header/>
                    <div className="flex items-center justify-center flex-col text-[#FFFFFF] mt-[66px]">
                        <h1 className="text-[24px] lg:text-[64px] font-bold">КАТАЛОГ НАШЕЙ ПРОДУКЦИИ</h1>
                        <div className="flex text-white flex-wrap gap-[15px] lg:text-[15px] lg:gap-11">
                            <a href="#" className="">Все
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Молоко
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Сырки
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Сыры
                                <img src="/WhiteLine.png" alt=""className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Сметана, Каймак, Сливки
                                <img src="/WhiteLine.png" alt=""className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Йогурты
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Кисломолочная продукция
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                            <a href="#" className="">Масло
                                <img src="/WhiteLine.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            </a>
                        </div>
                    </div>
                    <div className="container"></div>
                </div>
                <div className="container">
                    <Catalog/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Product