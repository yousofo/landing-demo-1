"use client";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import "swiper/css/effect-fade";

const Home = () => {
  const swiper = useSelector((store) => store.swiper.swiper);
  const translate = useTranslations("HomePage");
  // t('title')
  const slideStyles = "flex justify-center items-center text-lg h-fit";
  function handleLinkClick(e, i) {
    e.preventDefault();
    swiper.slideTo(i);
  }
  const styles = {
    slide: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
      backgroundColor: "#4a90e2",
      color: "#fff",
      fontSize: "2rem",
    },
  };
  return (
    <section className="home-page relative flex flex-col overflow-hidden">
      <ScreenWrapper className="text-white flex flex-col justify-between py-8 screen-section">
        {/* <section className="lg:flex justify-between items-center">
          <h1 className="text-4xl font-bold">
            <span className="uppercase">rsay</span>{" "}
            <span className="capitalize">information technology company</span>
          </h1>
          <h2 className="uppercase hidden lg:block text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold">
            rsay
          </h2>
        </section>
        <section className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl w-full font-bold text-end lg:text-start">
            شركة رساي لتقنية المعلومات
          </h2>
          <p className="text-base w-full lg:text-xl" dir="rtl">
            رساي شركة سعودية تقنية متخصصة بالخدمات التقنية وخدمات الامن
            السيبراني.
            <br />
            لدي رساي فريق عمل محترفين وخبرة عالية في الخدمات التقنية ومتخصصين في
            كشف الثغرات لجميع الأنظمة. <br />
            تستهدف رساي القطاع بتقديم خدمات بجودة عالية وخدمة ما بعد البيع
            للقطاع الحكومي والخاص.
          </p>
        </section> */}
        <section className="flex flex-col items-center justify-center gap-4 flex-1 max-w-[700px]">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <p className="text-base md:text-xl font-light">
              {translate("title")}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase flex flex-col text-center md:text-start">
              <span className="leading-[1.2]">{translate("name")}</span>{" "}
              <span>{translate("field")}</span>
              <span className="text-xs">{translate("organizationType")}</span>
            </h1>
            <p className="text-base md:text-lg font-light text-center md:text-start">
              {translate("about1")} <br /> {translate("about2")}
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={"/contact"}
                onClick={(e) => handleLinkClick(e, 4)}
                className="text-white border border-white py-1 px-5 rounded-sm hover:bg-white hover:text-primary transition-all"
              >
                {translate("startBtn")}
              </Link>
              <Link
                href={"/about"}
                onClick={(e) => handleLinkClick(e, 1)}
                className="text-white border border-primary py-1 px-5 bg-primary rounded-sm hover:bg-white hover:border-primary hover:text-primary transition-all"
              >
                {translate("learnBtn")}
              </Link>
            </div>
          </div>
        </section>
      </ScreenWrapper>
      <section className="bg-primary text-white p-4">
        <p className="flex flex-col md:flex-row gap-4 md:gap-2 uppercase text-center   items-center justify-center text-inherit">
          <span>start your plan now</span>
          <span>upgrade to premium and access all features</span>
          <Link
            className="text-white border border-white py-0.5 px-3 rounded-sm hover:bg-white hover:text-primary transition-all"
            href="/contact"
            onClick={(e) => handleLinkClick(e, 4)}
          >
            start now
          </Link>
        </p>
      </section>
      {/* services */}
      <section className="h-fit relative py-10 flex flex-col gap-6">
        <ScreenWrapper className="z-10 flex flex-wrap">
          {Array.from({ length: 3 }, (_, i) => (
            <div className="w-full p-4 md:w-1/2 lg:w-1/3 ">
              <div className="rounded-2xl transition-all bg-white bg-opacity-90 p-4 shadow-2 drop-shadow hover:shadow-lg dark:bg-dark-2 ">
                <div className="mb-8 flex  items-center justify-center rounded-2xl bg-primary overflow-hidden">
                  {/* {icon} */}
                  <img
                    src="/images/placeholders/cybersecurity.jpg"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
                  تدريب الأمن السيبراني و أمن المعلومات
                </h4>
                <p className="text-body-color dark:text-dark-6">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
                <Link
                  onClick={(e) => handleLinkClick(e, 5)}
                  href="/service"
                  className="px-2 py-0.5 mt-4 border-primary border rounded text-sm font-semibold inline-block text-primary hover:bg-primary hover:text-white transition-all"
                >
                  show more
                </Link>
              </div>
            </div>
          ))}
        </ScreenWrapper>
        <Link
          href="/services"
          onClick={(e) => handleLinkClick(e, 2)}
          className="text-white z-10 border border-white py-1 px-5  rounded-sm hover:bg-white hover:border-primary hover:text-primary transition-all flex gap-4 items-center"
        >
          <span className="font-medium">show all</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.78em"
            height="1em"
            viewBox="0 0 16 9"
          >
            <path
              fill="currentColor"
              d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"
            ></path>
            <path
              fill="currentColor"
              d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            ></path>
          </svg>
        </Link>
        <Image
          src={
            "/images/placeholders/tata_strive_cybersecurity_women_banner_desktop_1920x1080.jpg"
          }
          alt="image"
          fill
          quality={100}
          className="w-full h-full object-cover"
        />
      </section>
      {/* Partners */}
      <section className="partners bg-gray-900 flex flex-col w-full items-center justify-center gap-8 px-4 py-14 md:h-[300px]  text-white">
        <h3 className="text-2xl">Our Partners</h3>
        <Swiper
          spaceBetween={0}
          slidesPerView={3}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => dispatch(setSwiper(swiper))}
          className="w-full"
          // autoHeight={true}
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          effect="fade"
        >
          {/* 0 */}
          <SwiperSlide>
            <div className={slideStyles}>example</div>
          </SwiperSlide>
          {/* 1 */}
          <SwiperSlide>
            <div className={slideStyles}>example</div>
          </SwiperSlide>
          {/* 2 */}
          <SwiperSlide>
            <div className={slideStyles}>example</div>
          </SwiperSlide>
          {/* 3 */}
          <SwiperSlide>
            <div className={slideStyles}>example</div>
          </SwiperSlide>
          {/* 4 */}
          <SwiperSlide>
            <div className={slideStyles}>example</div>
          </SwiperSlide>
        </Swiper>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-0 w-fit py-2"></ul>
      </section>
      {/* video background */}
      <div className="absolute inset-0 w-[calc(100%+40px)] h-[calc(100vh+40px)] left-[-20px] top-[-20px] -z-10">
        <div className="absolute inset-0 w-full h-full bg-black/70"></div>
        <video
          className="w-full h-full  object-cover blur-lg"
          muted
          autoPlay
          loop
        >
          <source src="/images/background/home-bg.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Home;
