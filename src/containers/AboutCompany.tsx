import React from "react"

const AboutCompany: React.FC = () => {
    return (
        <div>
            <div className="mt-[60px] lg:flex lg:items-center lg:justify-between lg:mt-[50px]">
                <div className="flex flex-col gap-0 text-[24px] lg:text-[64px] font-bold text-[#00A23A]">
                    <h1>О Нашей</h1>
                    <h1>компании</h1> 
                </div>
                <div className="flex items-center gap-[173px]">
                    <div className="flex flex-col text-[15px] font-normal lg:text-[20px] font-medium text-[#003014]">
                        <p>Puremilky - молочная продукция фермерского производства,</p>
                        <p>изготавливается согласно</p>
                        <p>требованиям европейского качества</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-[20px] mt-[81px]">
                <div className="flex flex-col text-center">
                    <div>
                        <h1 className="text-[24px] lg:text-[88px] font-semibold text-[#00A23A]">10m</h1>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Продуктов произведено</p>
                    </div>
                </div>
                <div className="mt-[180px] flex flex-col text-center">
                        <h1 className="text-[24px] lg:text-[88px] font-semibold text-[#00A23A]">23</h1>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Крупных городов СНГ</p>
                        <p className="text-[15px] lg:text-[28px] font-semibold">пользуются продукцией</p>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Puremilky</p>
                </div>
                <div>
                    <div className="flex flex-col text-center">
                        <h1 className="text-[24px] lg:text-[88px] font-semibold text-[#00A23A]">10 000</h1>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Магазинов Узбекистана</p>
                        <p className="text-[15px] lg:text-[28px] font-semibold">продают товары от</p>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Puremilky</p>
                    </div>
                </div>    
                <div className="mt-[180px] flex flex-col text-center">
                        <h1 className="text-[24px] lg:text-[88px] font-semibold text-[#00A23A]">10m</h1>
                        <p className="text-[15px] lg:text-[28px] font-semibold">Постоянных покупателей</p>
                        <p className="text-[15px] lg:text-[28px] font-semibold">продукции Puremilky</p>
                    </div>
                </div>
            </div>
    )
}

export default AboutCompany