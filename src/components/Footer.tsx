import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="flex items-center justify-center bg-[#00A23A] text-white py-[53px] relative mt-[60px] lg:mt-[213px]">
        <div className="lg:bg-[url('/FooterImg.png')] bg-no-repeat bg-cover bg-center absolute top-0 w-full h-[190px]"></div>
        
        <div className="relative z-10 w-full">
          <div className="max-w-screen-xl mx-auto flex justify-center">
            <div className="bg-white text-[#00A23A] rounded-xl p-[21px] lg:p-[60px] flex items-center gap-[40px] mt-[-100px] lg:gap-[250px]"> 
              <div>
                <h3 className="text-[18px] lg:text-[38px] font-bold">ОСТАЛИСЬ <br /> ВОПРОСЫ?</h3>
                <p className="mt-[14px] text-[12px] lg:text-[22px]">Заполните небольшую заявку <br /> и мы свяжемся с вами <br /> в течение 2х рабочих дней</p>
              </div>
              <div className="flex flex-col gap-[10px] lg:gap-[14px]">
                <input type="text" placeholder="Ваше имя" className="border-none text-[#717171] rounded-lg py-[10px] px-[17px] lg:p-[18px] bg-[#ECECEC]" />
                <input type="text" placeholder="Номер телефона" className="border-none text-[#717171] rounded-lg py-[10px] px-[17px] lg:p-[18px] bg-[#ECECEC]" />
                <button className="bg-[#00A23A] text-white py-[10px] px-[31px] lg:py-[18px] lg:px-[80px] rounded-lg cursor-pointer">Отправить заявку</button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center justify-center gap-[39px] mt-[30px] lg:gap-[150px] lg:mt-[50px] w-full">
              <div className="">
                <img src="/PureMilkyLogo.png" alt="" className="hidden lg:block"/>
              </div>
              <div className="">
                <h4 className="text-[18px] lg:text-[40px] font-bold">Меню</h4>
                <div className="flex items-center justify-center gap-[15px] lg:gap-[132px] mt-[19px]">
                  <div className="flex flex-col text-[12px] lg:text-[20px] font-normal">
                    <Link to={"/Product"} className="hover:underline">Продукция</Link>
                    <a href="#" className="hover:underline">Рецепты</a>
                    <a href="#" className="hover:underline">Блог</a>
                  </div>
                  <div className="flex flex-col text-[12px] lg:text-[20px] font-normal">
                    <a href="#" className="hover:underline">О компании</a>
                    <a href="#" className="hover:underline">Вакансии</a>
                    <a href="#" className="hover:underline">Контакты</a>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <h4 className="text-[18px] lg:text-[40px] font-bold">Контактная информация</h4>
                <div className="flex items-center gap-[95px] mt-[19px]">
                  <div className="flex flex-col">
                    <p className="text-[12px] lg:text-[15px]">Поддержка:</p>
                    <span className="text-[12px] lg:text-[24px] font-bold">98 180-66-55</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] lg:text-[15px]">Электронная почта:</p>
                    <span className="text-[12px] lg:text-[24px] font-bold">98 180-66-55</span>
                  </div>
                </div>
                <div className="">
                  <img src="/SocialLogos.png" alt="" className="hidden lg:block lg:mt-[10px]"/>
                </div>
              </div>

              <div className="block lg:hidden">
                <h4 className="text-[18px] font-bold">Контактная информация</h4>
                <div className="flex items-center gap-[15px] mt-[19px]">
                  <div className="flex flex-col">
                    <p className="text-[12px]">Отдел продаж:</p>
                    <span className="text-[12px] font-bold">98 180-66-55</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px]">Отдел контроля качества:</p>
                    <span className="text-[12px] font-bold">98 180-66-55</span>
                  </div>
                </div>
                <div className="">
                  <img src="/SocialLogos.png" alt="" className="hidden lg:block lg:mt-[10px]"/>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-around mt-[24px] lg:hidden">
                <Link to={"/"}><img src="/PureMilkyLogo.png" alt="" className="cursor-pointer"/></Link>
                <img src="/SocialLogos.png" alt="" />
            </div>

            <div className="flex items-center justify-around mt-[15px] lg:mt-[53px] text-[10px] lg:text-[20px]">
              <p>Puremilky 2025</p>
              <a href="#" className="hover:underline">Политика Конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>

    )
}
  
export default Footer;