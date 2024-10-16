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
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  const translate = useTranslations("HomePage");
  const translate2 = useTranslations("courses");
  // t('title')
  const slideStyles = "flex justify-center items-center text-lg h-fit";

  const images = [
    "/images/placeholders/softwareengineering.jpeg",
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/cloud-computing-900x600.jpg",
  ];
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
  // const partners = (
  //   <section className="partners bg-gray-900 flex flex-col w-full items-center justify-center gap-8 px-4 py-14 md:h-[300px]  text-white">
  //     <h3 className="text-2xl">Our Partners</h3>
  //     <Swiper
  //       spaceBetween={0}
  //       slidesPerView={3}
  //       // onSlideChange={() => console.log("slide change")}
  //       // onSwiper={(swiper) => dispatch(setSwiper(swiper))}
  //       className="w-full"
  //       // autoHeight={true}
  //       modules={[Autoplay]}
  //       loop={true}
  //       autoplay={{ delay: 1000, disableOnInteraction: false }}
  //       effect="fade"
  //     >
  //       {/* 0 */}
  //       <SwiperSlide>
  //         <div className={slideStyles}>example</div>
  //       </SwiperSlide>
  //       {/* 1 */}
  //       <SwiperSlide>
  //         <div className={slideStyles}>example</div>
  //       </SwiperSlide>
  //       {/* 2 */}
  //       <SwiperSlide>
  //         <div className={slideStyles}>example</div>
  //       </SwiperSlide>
  //       {/* 3 */}
  //       <SwiperSlide>
  //         <div className={slideStyles}>example</div>
  //       </SwiperSlide>
  //       {/* 4 */}
  //       <SwiperSlide>
  //         <div className={slideStyles}>example</div>
  //       </SwiperSlide>
  //     </Swiper>
  //     {/* <ul className="flex flex-col md:flex-row gap-4 md:gap-0 w-fit py-2"></ul> */}
  //   </section>
  // );
  return (
    <section className="home-page relative flex flex-col overflow-hidden">
      <ScreenWrapper className="text-white first-sec relative flex flex-col justify-between py-8 screen-section items-center">
        <section className="flex  flex-col items-center justify-center gap-4 flex-1 max-w-[900px]">
          <div className="flex flex-col gap-4 items-center md:items-center">
            {/* above header title */}
            <p className="text-lg md:text-2xl font-light capitalize text-center">
              {translate("title")}
            </p>
            {/* main header  */}
            <h1
              // style={{ wordSpacing: "10px" }}
              className="text-3xl md:text-4xl lg:text-7xl lg:leading-tight font-bold max-w-[800px] uppercase flex flex-col text-center spacing"
            >
              {translate("name")}
            </h1>
            {/* below header info */}
            <p className="text-lg md:text-xl font-normal text-center">
              {translate("about1")}
            </p>
            {/* links */}
            <div className="flex items-center gap-2">
              <button
                onClick={(e) => handleLinkClick(3)}
                className="text-white border border-white py-1 px-5 rounded-sm hover:bg-white hover:text-primary transition-all"
              >
                {translate("startBtn")}
              </button>
              <button
                onClick={(e) => handleLinkClick(1)}
                className="text-white border border-primary py-1 px-5 bg-primary rounded-sm hover:bg-white hover:border-primary hover:text-primary transition-all"
              >
                {translate("learnBtn")}
              </button>
            </div>
          </div>
        </section>
      </ScreenWrapper>
      {/* services */}
      <section className="h-fit second-sec relative py-10 pt-5 flex flex-col gap-6 bg-white">
        <ScreenWrapper className="z-10 flex flex-col items-center">
          <div className="second-sec-title">
            <h3 className="capitalize text-2xl font-bold text-primary pb-3">
              {translate("services")}
            </h3>
          </div>
          <div className="z-10 flex flex-wrap">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="w-full p-4 md:w-1/2 lg:w-1/3 ">
                <div className="rounded-2xl transition-all bg-white  p-4 ">
                  <div className="mb-8 flex aspect-video items-center justify-center rounded-2xl bg-primary overflow-hidden">
                    {/* {icon} */}
                    <img
                      src={images[i]}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <h4 className="mb-[14px] text-gray-900 text-2xl font-semibold">
                    {translate2(`course${i + 1}.title`)}
                  </h4>
                  <p className="text-lg lg:text-xl font-medium text-gray-700">
                    {translate2(`course${i + 1}.content`)}
                  </p>
                  {/* <Link
                    onClick={(e) => handleLinkClick(e, 5)}
                    href="/service"
                    className="px-2 py-0.5 mt-4 border-primary border rounded text-sm font-semibold inline-block text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    show more
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </ScreenWrapper>
        <button
          onClick={(e) => handleLinkClick(2)}
          className="text-primary z-10 border border-primary py-1 px-5  rounded-sm hover:bg-primary hover:border-white hover:text-white transition-all flex gap-4 items-center"
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
        </button>
        {/* background image */}
        {/* <Image
          src={
            "/images/placeholders/tata_strive_cybersecurity_women_banner_desktop_1920x1080.jpg"
          }
          alt="image"
          fill
          quality={100}
          className="w-full h-full object-cover"
        /> */}
      </section>
      {/* separator */}
      <div className="px-4 w-full ">
        <hr className="w-full max-w-lg mb-6 mx-auto" />
      </div>
      {/* who are we */}
      <div className="px-4">
        <ScreenWrapper className="bg-[#DCECE9] flex flex-col lg:flex-row justify-between gap-4 rounded-3xl lg:p-6">
          <section className="flex flex-col gap-6 lg:items-start justify-center text-rsayBlack w-fit lg:ps-6">
            <h4 className="text-3xl font-bold text-center lg:text-left capitalize w-fit">
              {translate("who")}
            </h4>
            <p className="text-lg md:text-xl text-center lg:text-left !leading-relaxed font-normal max-w-[700px]">
              {translate("about1")}
            </p>
            <button
              className="underline text-primary font-bold text-lg"
              onClick={(e) => handleLinkClick(1)}
            >
              {translate("learnBtn")}
            </button>
          </section>
          <div>
            <Image
              src={"/images/placeholders/home/about.png"}
              alt="home more about rsay"
              width={600}
              height={0}
              // className="w-full h-full object-cover"
            />
          </div>
        </ScreenWrapper>
      </div>
      {/* separator */}
      <div className="px-4 w-full ">
        <hr className="w-full max-w-lg my-6 mx-auto" />
      </div>
      {/* download */}
      <ScreenWrapper className="flex justify-center flex-col lg:flex-row items-center gap-8">
        <img
          src="/images/placeholders/home/download.png"
          className="w-full max-w-lg"
          alt="download rsay profile"
        />
        <a
          className="px-7 py-4  relative text-primary font-bold border-primary border transition-all rounded-xl flex flex-col items-center  bg-white shadow-2xl hover:shadow-3xl hover:bg-primary hover:text-white hover:border-white group"
          // href="https://drive.google.com/file/d/12FzQVQR1s5IXB3HCKLG9t8dC_mMx3NYI/"
          href="https://drive.usercontent.google.com/download?id=12FzQVQR1s5IXB3HCKLG9t8dC_mMx3NYI&export=download&pli=1&authuser=0"
          download="rsay-profile"
        >
          <span className="absolute top-0.5 right-0.5 text-rsayBlack animate-pulse group-hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
              ></path>
            </svg>
          </span>
          <span className="capitalize text-2xl">Download Profile</span>
          <span className="capitalize">click here to start download</span>
        </a>
      </ScreenWrapper>
      {/* download old */}
      {/* <ScreenWrapper className="flex flex-col items-center py-8">
        <img
          className="w-full max-w-lg"
          src="/images/placeholders/More-about-us-brown.png"
          alt="download rsay profile"
        />
      </ScreenWrapper> */}
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
