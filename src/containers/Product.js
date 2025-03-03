import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Product = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsx("div", { children: _jsxs("div", { className: "lg:flex lg:justify-between lg:mx-auto items-center", children: [_jsxs("div", { className: "flex flex-col gap-0 text-[24px] lg:text-[64px] font-bold text-[#00A23A]", children: [_jsx("h1", { children: "\u041F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F" }), _jsx("h1", { children: "Puremilky" })] }), _jsxs("div", { className: "flex items-center gap-[173px]", children: [_jsxs("div", { className: "flex flex-col text-[15px] font-normal lg:text-[20px] font-medium text-[#003014]", children: [_jsx("p", { children: "\u041C\u043E\u043B\u043E\u0447\u043D\u0430\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F" }), _jsx("p", { children: "\u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430" }), _jsx("p", { children: "\u043F\u043E \u043B\u0443\u0447\u0448\u0438\u043C \u0440\u0435\u0446\u0435\u043F\u0442\u0430\u043C" })] }), _jsx("button", { className: "w-[142px] h-[36px] text-[12px] font-normal rounded-sm lg:w-[235px] lg:h-[68px] lg:text-[23px] lg:rounded-md bg-[#00A23A] text-[#FFFFFF] cursor-pointer ", onClick: () => navigate("/Product"), children: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0442\u0430\u043B\u043E\u0433" })] })] }) }));
};
export default Product;
