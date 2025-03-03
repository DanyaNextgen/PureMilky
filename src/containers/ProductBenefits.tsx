import React from "react"

const ProductBenefits: React.FC = () => {
    return (
        <div>
            <div className="mt-[60px] mb-[30px] lg:flex lg:items-center lg:justify-between lg:mt-[50px]">
                <div className="flex flex-col gap-0">
                    <h1 className="text-[24px] lg:text-[64px] font-bold text-[#00A23A]">Преимущества</h1>
                    <h1 className="text-[24px] lg:text-[64px] font-bold text-[#00A23A]">продуктов</h1> 
                </div>
                <div className="flex items-center gap-[173px]">
                    <div className="flex flex-col text-[15px] font-normal lg:text-[20px] font-medium text-[#003014]">
                        <p>Puremilky - молочная продукция фермерского производства,</p>
                        <p>изготавливается согласно</p>
                        <p>требованиям европейского качества</p>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-[url('/ProductBenefitsImg.png')] bg-no-repeat bg-contain bg-center max-w-[402px] h-[291px] lg:max-w-[1322px] lg:h-[930px] mx-auto">
                <div className="">
                    <div className="flex flex-col items-center">
                        <div className="flex flex-col">
                            <div className="flex gap-x-[44px] lg:gap-x-[357px]">
                                <div className="bg-[#00A23A] text-[#FFFFFF] max-w-[177px] h-[72px] p-[8px] rounded-xl lg:max-w-[330px] lg:h-[150px]  lg:mt-[60px] lg:p-[20px]">
                                    <p className="block lg:hidden">Puremilky - молочная продукция</p>
                                    <p className="hidden lg:block">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                                </div>
                                <div className="bg-[#00A23A] text-[#FFFFFF] max-w-[177px] h-[72px] p-[8px] mt-[71px] rounded-xl lg:max-w-[330px] lg:h-[150px] lg:p-[20px] lg:mt-[284px]">
                                    <p className="block lg:hidden">Puremilky - молочная продукция</p>
                                    <p className="hidden lg:block">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                                </div>
                            </div>
                            <div className="flex gap-x-[44px] lg:gap-x-[357px]">
                                <div className="bg-[#00A23A] text-[#FFFFFF] max-w-[177px] h-[72px] p-[8px] rounded-xl lg:max-w-[330px] lg:h-[150px]  lg:mt-[60px] lg:p-[20px]">
                                    <p className="block lg:hidden">Puremilky - молочная продукция</p>
                                    <p className="hidden lg:block">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                                </div>
                                <div className="bg-[#00A23A] text-[#FFFFFF] max-w-[177px] h-[72px] p-[8px] mt-[71px] rounded-xl lg:max-w-[330px] lg:h-[150px] lg:p-[20px] lg:mt-[284px]"> 
                                    <p className="block lg:hidden">Puremilky - молочная продукция</p>
                                    <p className="hidden lg:block">Puremilky - молочная продукция фермерского производства, изготавливается согласно требованиям европейского качества</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductBenefits