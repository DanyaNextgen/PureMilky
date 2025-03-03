import React from "react"
import NewsCard from "../components/NewsCard"

const News: React.FC = () => {
    return (
        <div>
            <div className="mt-[72px] lg:flex lg:justify-between lg:mx-auto items-center">
                <div className="flex flex-col gap-0 text-[24px] lg:text-[64px] font-bold text-[#00A23A]">
                    <h1>Новости</h1>
                    <h1>и акции</h1> 
                </div>
                <div className="flex items-center gap-0 lg:gap-[63px]">
                    <div className="flex flex-col text-[15px] font-normal lg:text-[20px] font-medium text-[#003014]">
                        <p>Puremilky - молочная продукция фермерского производства,</p>
                        <p>изготавливается согласно</p>
                        <p>требованиям европейского качества</p>
                    </div>
                    <div className="flex gap-[22px] h-[38px] lg:h-[56px]">
                        <img src="/LeftBtn.png" alt="" className="cursor-pointer"/>
                        <img src="/RightBtn.png" alt="" className="cursor-pointer"/>
                    </div>
                </div>
            </div>
            <NewsCard/>
        </div>
    )
}

export default News