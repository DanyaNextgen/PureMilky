import React from "react"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <header className="bg-[#00A23A] w-full lg:flex lg:items-center lg:justify-around lg:w-330 lg:h-23 lg:rounded-lg lg:mt-[20px]">
                <div className="flex items-center justify-between p-[10px]">
                    <Link to={"/"}><img src="/PureMilkyLogo.png" alt="" className="cursor-pointer"/></Link>
                    <img src="/BurgerMenu.png" alt="" className="cursor-pointer flex lg:hidden" />
                </div>
                <div className="flex text-white lg:text-[15px] lg:gap-11">
                    <Link to={"/"} className="hover:text-[#FDC500] group hidden lg:block">Главная
                        <img src="/Line.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </Link>
                    <Link to={"/Product"} className="hover:text-[#FDC500] group hidden lg:block">Продукция
                        <img src="/Line.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </Link>
                    <a href="#" className="hover:text-[#FDC500] group hidden lg:block">О компании
                        <img src="/Line.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                    <a href="#" className="hover:text-[#FDC500] group hidden lg:block">Рецепты
                        <img src="/Line.png" alt=""className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                    <a href="#" className="hover:text-[#FDC500] group hidden lg:block">Блог
                        <img src="/Line.png" alt=""className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                    <a href="#" className="hover:text-[#FDC500] group hidden lg:block">Контакты
                        <img src="/Line.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                    <a href="#" className="hover:text-[#FDC500] group hidden lg:block">Вакансии
                        <img src="/Line.png" alt="" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                    </a>
                </div>
                <div className="text-white text-[20px] font-[500] flex gap-2">
                    <span className="hover:text-[#FDC500] cursor-pointer hidden lg:block">UZB</span>
                    <span className="text-[#FDC500] hover:text-[#FDC500] cursor-pointer hidden lg:block">РУС</span>
                    <span className="hover:text-[#FDC500] cursor-pointer hidden lg:block">ENG</span>
                </div>
            </header>
        </div>
    )
}

export default Header