import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const catalogItems = [
    { id: 1, imgSrc: "/Kefir.png", productName: "Кефир Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 2, imgSrc: "/Tvorog.png", productName: "Творог Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 3, imgSrc: "/Kefir.png", productName: "Кефир Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 4, imgSrc: "/Smetana.png", productName: "Сметана Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 5, imgSrc: "/Kefir.png", productName: "Кефир Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 6, imgSrc: "/Tvorog.png", productName: "Творог Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 7, imgSrc: "/Kefir.png", productName: "Кефир Puremilky", productWeight: "200 мг - 459 мг" },
    { id: 8, imgSrc: "/Smetana.png", productName: "Сметана Puremilky", productWeight: "200 мг - 459 мг" },
];
const CatalogItem = ({ imgSrc, productName, productWeight }) => {
    return (_jsxs("div", { className: "bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden", children: [_jsx("div", { className: "flex items-center justify-center p-[20px] h-[284px] lg:h-[355px]", children: _jsx("img", { src: imgSrc, alt: productName, className: "max-h-full w-auto object-contain" }) }), _jsxs("div", { className: "flex items-center justify-between bg-[#00A23A] text-[#FFFFFF] p-4 rounded-b-xl", children: [_jsxs("div", { className: "flex flex-col", children: [_jsx("span", { className: "text-[13px] lg:text-[20px] font-bold", children: productName }), _jsx("p", { className: "text-[12px] lg:text-[15px]", children: productWeight })] }), _jsx("div", { children: _jsx("img", { src: "/RightArrow.png", alt: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435", className: "h-[14px] lg:h-[20px] cursor-pointer" }) })] })] }));
};
const Catalog = () => {
    return (_jsxs("div", { className: "mt-[30px] lg:mt-[50px]", children: [_jsx("div", { className: "grid grid-cols-2 gap-[8px] lg:grid-cols-4 lg:gap-[20px]", children: catalogItems.map((item) => (_jsx(CatalogItem, { imgSrc: item.imgSrc, productName: item.productName, productWeight: item.productWeight }, item.id))) }), _jsxs("div", { className: "hidden lg:flex justify-center items-center gap-[20px] text-[#003014] mt-[30px] text-[14px] lg:text-[18px]", children: [_jsx("button", { className: "cursor-pointer", children: "< \u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439" }), _jsx("button", { className: "w-[30px] h-[30px] flex items-center justify-center font-normal text-[#FFFFFF] bg-[#00A23A] rounded-lg cursor-pointer", children: "1" }), _jsx("button", { className: "cursor-pointer", children: "2" }), _jsx("button", { className: "cursor-pointer", children: "3" }), _jsx("span", { className: "cursor-pointer", children: "..." }), _jsx("button", { className: "cursor-pointer", children: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 >" })] })] }));
};
export default Catalog;
