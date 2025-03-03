import React from "react"

const SiyobCompany: React.FC = () => {
    return (
        <div>
            <div className="mt-[60px] mb-[15px] lg:flex lg:justify-between lg:mx-auto items-center lg:my-[55px]">
                <div className="flex justify-between gap-0 text-[24px] lg:text-[64px] font-bold text-[#00A23A]">
                    <div className="flex flex-col">
                        <h1>О нашей</h1>
                        <h1>компании</h1> 
                    </div>
                    <div className="flex flex-col gap-0 text-[18px] font-bold text-[#00A23A] lg:hidden">
                        <h1>Группа компаний</h1>
                        <h1>«Siyob»</h1> 
                    </div>
                </div>
                <button className="hidden lg:block w-[142px] h-[36px] text-[12px] font-normal rounded-sm lg:w-[235px] lg:h-[68px] lg:text-[23px] lg:rounded-md bg-[#00A23A] text-[#FFFFFF] cursor-pointer">Подробнее</button>
            </div>
            <div className="flex lg:gap-[20px]">
                <div>
                    <img src="/SiyobYoutube.png" alt="" className="hidden lg:block lg:max-w-[761px]" />
                </div>
                <div className="flex flex-col gap-[18px]">
                    <div className="hidden flex flex-col gap-0 text-[31px] font-bold text-[#00A23A] lg:block">
                        <h1>Группа компаний</h1>
                        <h1>«Siyob»</h1> 
                    </div>
                    <div className="text-[15px] lg:text-[18px] font-normal">
                        <p>Группа компаний «Siyob» - многопрофильный холдинг по производству и реализации товаров народного потребления, на протяжении 10 лет на рынке Узбекистана. Одной из компаний в составе холдинга стала компания «PureMilky Works»</p>
                    </div>
                    <div>
                        <img src="/SiyobYoutube.png" alt="" className="max-w-[392px] lg:hidden" />
                    </div>
                    <div className="text-[15px] lg:text-[18px] font-normal">
                        <p>«PureMilky Works» самый крупный молочный завод в Узбекистане. Специализируется на производстве натуральной молочной и масложировой продукции. Основанное в 2013 году, предприятие имеет в составе, молочный и масложировой заводы.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiyobCompany