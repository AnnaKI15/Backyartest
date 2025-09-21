import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Aggregator from "../img/aggregator.png";
import Boost from "../img/boost.png";
import Stablecoin from "../img/stablecoin.png";

export default function Backyard() {
  const items = [
    {
      img: Aggregator,
      alt: "Aggregator",
      small: "Yield Aggregator",
      title: "One-click yield aggregation",
      text: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
    },
    {
      img: Stablecoin,
      alt: "Stablecoin",
      small: "Yield-backed Stablecoin",
      title: "Unlock liquidity with BYD",
      text: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
    },
    {
      img: Boost,
      alt: "Boost",
      small: "Boost DeFi Liquidity",
      title: "Boost protocols, earn more",
      text: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
    },
  ];

  return (
    <section id="backyard" className="py-[35px] md:px-8 bg-[#EFEFF2]">
      <div className="container mx-auto px-4">
        <h2 className="font-archivo text-[28px] font-bold text-[#303030]">
          What is Backyard?
        </h2>

        {/*Мобільний + планшет (слайдер) */}
        <div className="block lg:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="md:flex md:flex-row-reverse md:justify-between">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="mx-auto"
                  />
                  <div className="md:w-1/2">
                    <h3 className="w-xs flex items-centerfont-archivo text-xl text-[#303030] font-semibold rounded-full bg-[#F4F6F7] py-3 px-3 mt-[-20px] md:mt-[43px] mb-4 relative z-30">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2D322F]  text-white font-bold mr-8">
                        {i + 1}
                      </span>
                      {item.small}</h3>
                    <h4 className="flex items-center justify-center font-archivo text-lg font-extrabold px-8 pt-8 pb-3 text-[#2D322F] bg-[#F4F6F7] rounded-t-[31px]">{item.title}</h4>
                    <p className="font-inter font-medium text-[14px] text-[#787878] bg-[#F4F6F7] px-8 pb-8  rounded-b-[31px]">{item.text}</p>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/*  Десктоп */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div
              key={i}
              className=""
            >
              <img
                src={item.img}
                alt={item.alt}
                className="mx-auto mb-4 h-[191px] "
              />
              <div>
                    <h3 className="w-xs flex items-center font-archivo text-xl lg:text-lg lg:mt-[-40px] text-[#303030] font-semibold rounded-full bg-[#F4F6F7] py-3 px-3 mb-4 relative z-30">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2D322F]  text-white font-bold mr-8">
                        {i + 1}
                      </span>
                      {item.small}</h3>
                    <h4 className="h-auto flex items-center justify-center font-archivo text-lg font-extrabold px-8 pt-8 pb-3 text-[#2D322F] bg-[#F4F6F7] rounded-t-[31px]">{item.title}</h4>
                    <p className="font-inter font-medium text-[14px] text-[#787878] bg-[#F4F6F7] px-8 pb-8  rounded-b-[31px]">{item.text}</p>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
