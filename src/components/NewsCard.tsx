import React from "react"

const NewsCard: React.FC = () => {
  return (
    <div className="w-full mt-[30px] lg:mt-[32px] flex justify-center gap-[20px]">
        {[1, 2].map((_, index) => (
            <div key={index} className={`shadow-xl rounded-2xl p-[24px] w-[348px] border border-gray-100 lg:w-[650px]  ${index === 1 ? "hidden lg:block" : ""}`}>
            <div className="bg-[#FDC500] text-[#003014] font-bold text-sm px-[14px] py-[7px] lg:px-[24px] lg:py-[12px] rounded-full inline-block">Акция</div>
            <h2 className="text-[#00A23A] text-[24px] font-bold mt-[24px] leading-tight lg:text-[45px]">Выиграйте Malibu <br /> при покупке <br /> молока</h2>
            <p className="text-[#003014] mt-[5px] lg:mt-[9px]">Покупайте молоко и получите <br /> возможность выиграть <br /> Chevrolet Malibu</p>
            <button className="bg-[#00A23A] text-[#FFFFFF] font-normal py-[10px] px-[27px] mt-[50px] lg:py-[15px] lg:px-[50px] w-[185px] rounded-xl lg:mt-[86px] lg:w-[242px] cursor-pointer">Заполнить анкету</button>
            </div>
        ))}
    </div>
  )
}

export default NewsCard;