import React from "react";

const products = [
  { id: 1, img: "/CheeseImg.png", title: "Сыр" },
  { id: 2, img: "/MilkImg.png", title: "Молоко" },
  { id: 3, img: "/MilkImg.png", title: "Молоко" },
  { id: 4, img: "/CheeseImg.png", title: "Сыр" },
  { id: 5, img: "/MilkImg.png", title: "Молоко" },
  { id: 6, img: "/MilkImg.png", title: "Молоко" },
]

const ProductCard: React.FC<{ img: string; title: string }> = ({ img, title }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <img src={img} alt={title} className="h-[180px] w-[188px] lg:h-[300px] w-full object-cover"/>
      <div className="text-[13px] lg:text-[24px] bg-[#00A23A] font-medium text-[#FFFFFF] p-[14px] flex items-center justify-between">
        <span>{title}</span>
        <img src="/RightArrow.png" alt="" className="h-[14px] lg:h-[28px] cursor-pointer" />
      </div>
    </div>
  )
}

const ProductGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-[20px] mt-[30px] lg:grid-cols-3 lg:mt-[62px]">
        {
            products.map((product) => (<ProductCard key={product.id} img={product.img} title={product.title} />))
        }
    </div>
  )
}

export default ProductGallery;