import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const products = [
    { id: 1, img: "/CheeseImg.png", title: "Сыр" },
    { id: 2, img: "/MilkImg.png", title: "Молоко" },
    { id: 3, img: "/MilkImg.png", title: "Молоко" },
    { id: 4, img: "/CheeseImg.png", title: "Сыр" },
    { id: 5, img: "/MilkImg.png", title: "Молоко" },
    { id: 6, img: "/MilkImg.png", title: "Молоко" },
];
const ProductCard = ({ img, title }) => {
    return (_jsxs("div", { className: "rounded-xl overflow-hidden", children: [_jsx("img", { src: img, alt: title, className: "h-[180px] w-[188px] lg:h-[300px] w-full object-cover" }), _jsxs("div", { className: "text-[13px] lg:text-[24px] bg-[#00A23A] font-medium text-[#FFFFFF] p-[14px] flex items-center justify-between", children: [_jsx("span", { children: title }), _jsx("img", { src: "/RightArrow.png", alt: "", className: "h-[14px] lg:h-[28px] cursor-pointer" })] })] }));
};
const ProductGallery = () => {
    return (_jsx("div", { className: "grid grid-cols-2 gap-[20px] mt-[30px] lg:grid-cols-3 lg:mt-[62px]", children: products.map((product) => (_jsx(ProductCard, { img: product.img, title: product.title }, product.id))) }));
};
export default ProductGallery;
