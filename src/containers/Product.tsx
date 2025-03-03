import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Product: React.FC = () => {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="lg:flex lg:justify-between lg:mx-auto items-center">
                <div className="flex flex-col gap-0 text-[24px] lg:text-[64px] font-bold text-[#00A23A]">
                    <h1>Продукция</h1>
                    <h1>Puremilky</h1> 
                </div>
                <div className="flex items-center gap-[173px]">
                    <div className="flex flex-col text-[15px] font-normal lg:text-[20px] font-medium text-[#003014]">
                        <p>Молочная продукция</p>
                        <p>уникального производства</p>
                        <p>по лучшим рецептам</p>
                    </div>
                    <button className="w-[142px] h-[36px] text-[12px] font-normal rounded-sm lg:w-[235px] lg:h-[68px] lg:text-[23px] lg:rounded-md bg-[#00A23A] text-[#FFFFFF] cursor-pointer " onClick={() => navigate("/Product")}>Открыть каталог</button>
                </div>
            </div>

        </div>
    )
}

export default Product