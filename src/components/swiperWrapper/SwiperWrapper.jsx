"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
// import CyberSecurityServices from "../pages/cyberSecurityServices/CyberSecurityServices";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import { useDispatch } from "react-redux";
import { setSwiper } from "@/state/features/swiper/SwiperSlice";
import UniversitiesContact from "../pages/universitiesContact/UniversitiesContact";
import CompaniesContact from "../pages/companiesContact/CompaniesContact";
// import Service from "../pages/service/Service";
const SwiperWrapper = () => {
  const dispatch = useDispatch();
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => (document.documentElement.scrollTop = 0)}
      onSwiper={(swiper) => dispatch(setSwiper(swiper))}
      className="w-full h-min flex-1 main-swiper"
      autoHeight={true} // Enable autoHeight
      modules={[EffectFade]}
      allowTouchMove={false}
      effect="fade"
    >
      {/* 0 */}
      <SwiperSlide>
        <Home />
      </SwiperSlide>
      {/* 1 */}
      <SwiperSlide>
        <About />
      </SwiperSlide>
      {/* 2 */}
      <SwiperSlide>
        <Services />
      </SwiperSlide>
      {/* 3 */}
      <SwiperSlide>
        <UniversitiesContact />
      </SwiperSlide>
      {/* 4 */}
      <SwiperSlide>
        <CompaniesContact />
      </SwiperSlide>

      {/* 4 */}

      {/* <Contact /> */}
      {/* 5 */}
      {/* <SwiperSlide>
        <Service />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperWrapper;
