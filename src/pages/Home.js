import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from '../components/Header';
import Product from '../containers/Product';
import ProductGallery from '../components/ProductCard';
import AboutCompany from '../containers/AboutCompany';
import ProductBenefits from '../containers/ProductBenefits';
import News from '../containers/News';
import SiyobCompany from '../containers/SiyobCompany';
import Footer from '../components/Footer';
function Home() {
    return (_jsxs("div", { children: [_jsx("div", { className: "relative w-full h-[900px]", children: _jsxs("div", { className: "bg-[url('/HeaderImg.png')] bg-no-repeat bg-cover bg-center w-full h-[800px]", children: [_jsx(Header, {}), _jsxs("div", { className: "flex items-center justify-center flex-col text-[#00A23A]", children: [_jsx("h1", { className: "text-[48px] lg:text-[128px] font-bold", children: "PUREMILKY" }), _jsx("h3", { className: "text-[15px] lg:text-[20px] font-medium", children: "\u041C\u041E\u041B\u041E\u0427\u041D\u0410\u042F \u041F\u0420\u041E\u0414\u0423\u041A\u0426\u0418\u042F" }), _jsx("h3", { className: "text-[15px] lg:text-[20px] font-medium", children: "\u0412\u042B\u0421\u0428\u0415\u0413\u041E \u041A\u0410\u0427\u0415\u0421\u0422\u0412\u0410" })] }), _jsx("div", { className: "lg:bg-[url('/UnderHeaderImg.png')] bg-no-repeat bg-cover bg-center absolute bottom-0 w-full h-[180px]" })] }) }), _jsxs("div", { className: "container", children: [_jsx(Product, {}), _jsx(ProductGallery, {}), _jsx(AboutCompany, {}), _jsx(ProductBenefits, {}), _jsx(News, {}), _jsx(SiyobCompany, {})] }), _jsx(Footer, {})] }));
}
export default Home;
