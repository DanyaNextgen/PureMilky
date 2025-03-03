import React from "react"

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

const CatalogItem: React.FC<{ imgSrc: string; productName: string; productWeight: string }> = ({ imgSrc, productName, productWeight }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center justify-center p-[20px] h-[284px] lg:h-[355px]">
        <img src={imgSrc} alt={productName} className="max-h-full w-auto object-contain" />
      </div>
      <div className="flex items-center justify-between bg-[#00A23A] text-[#FFFFFF] p-4 rounded-b-xl">
        <div className="flex flex-col">
            <span className="text-[13px] lg:text-[20px] font-bold">{productName}</span>
            <p className="text-[12px] lg:text-[15px]">{productWeight}</p>
        </div>
        <div>
          <img src="/RightArrow.png" alt="Подробнее" className="h-[14px] lg:h-[20px] cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

const Catalog: React.FC = () => {
  return (
    <div className="mt-[30px] lg:mt-[50px]">
      <div className="grid grid-cols-2 gap-[8px] lg:grid-cols-4 lg:gap-[20px]">
        {
            catalogItems.map((item) => (<CatalogItem key={item.id} imgSrc={item.imgSrc} productName={item.productName} productWeight={item.productWeight} />))  
        }
      </div>
      <div className="hidden lg:flex justify-center items-center gap-[20px] text-[#003014] mt-[30px] text-[14px] lg:text-[18px]">
        <button className="cursor-pointer">&lt; Предыдущий</button>
        <button className="w-[30px] h-[30px] flex items-center justify-center font-normal text-[#FFFFFF] bg-[#00A23A] rounded-lg cursor-pointer">1</button>
        <button className="cursor-pointer">2</button>
        <button className="cursor-pointer">3</button>
        <span className="cursor-pointer">...</span>
        <button className="cursor-pointer">Следующий &gt;</button>
      </div>
    </div>
  )
}

export default Catalog
