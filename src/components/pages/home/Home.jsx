"use client";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  setCategories,
  setCategoryPage,
} from "@/state/features/categories/categoriesSlice";
import messagesEn from "@/../messages/en.json";
import messagesAr from "@/../messages/ar.json";
// import "swiper/css/effect-fade";

const Home = () => {
  const swiper = useSelector((store) => store.swiper.swiper);
  const dispatch = useDispatch();
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  const tranlateInfo = useTranslations("info");
  const translate = useTranslations("HomePage");
  const translate2 = useTranslations("courses");

  // get categories based on language
  let categories;
  if (tranlateInfo("lang") === "ar") {
    categories = messagesAr.HomePage.categories;
  } else {
    categories = messagesEn.HomePage.categories;
  }

  const images = [
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/Systems-Network-Management-Training.jpg",
    "/images/placeholders/cloud-computing-900x600.jpg",
    "/images/placeholders/cybersecurity.jpg",
  ];
  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      key={"svg1"}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      key={"svg2"}
      height="32"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M15 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.6 15.388H4.4V18a.6.6 0 0 0 .6.6h10a.6.6 0 0 0 .6-.6zM10 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2m5-14.6H5a.6.6 0 0 0-.6.6v11.988h11.2V2a.6.6 0 0 0-.6-.6"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      key={"svg3"}
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        d="M1 19h22V1H1zm4 4h14zm3 0h8v-4H8zM7.757 5.757l2.122 2.122zM9 10H6zm.879 2.121l-2.122 2.122zM12 13v3zm2.121-.879l2.122 2.122zM18 10h-3zm-1.757-4.243l-2.122 2.122zM12 7V4zm0 0a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      key={"svg4"}
      viewBox="0 0 2048 2048"
    >
      <path
        fill="currentColor"
        d="M384 1536h128v128H256V384H128v1408h384v128H0V256h256V128h384q88 0 169 27t151 81q69-54 150-81t170-27h384v128h256v819l-128-58V384h-128v575l-128-59V256h-256q-71 0-136 24t-120 71v608l-128 58V351q-54-46-119-70t-137-25H384zm1408 255l-448 225l-448-225q0-36 1-76t8-81t20-77t36-67l-193-88v582H640v-640l704-320l704 320l-321 146l8 11q21 31 32 67t17 73t7 76t1 74m-448-627l-395 180l395 180l395-180zm0 709l320-161q-1-26-4-47t-11-41t-16-39t-23-42l-266 121l-266-121q-15 24-24 43t-16 38t-9 40t-4 49z"
      ></path>
    </svg>,
  ];
  const handleCategoryClick = (category) => {
    if (category < 3) {
      dispatch(setCategoryPage(category));
      handleLinkClick(5);
    } else {
      handleLinkClick(2);
    }
  };
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
          {/* items wrapper */}
          <div className="z-10 flex flex-wrap">
            {categories.map((category, i) => (
              <div key={i} className="w-full p-2 xl:p-4 lg:w-1/2 flex flex-col">
                <div className="rounded-2xl transition-all relative  px-6 py-8  flex flex-col lg:flex-row flex-1 justify-between  gap-4 border overflow-hidden">
                  {/* img wrapper */}
                  {/* <div className="flex aspect-video items-center justify-center rounded-lg overflow-hidden border">
                    <img
                      src={images[i]}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div> */}
                  <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <img
                      src={images[i]}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                    <div
                      className="absolute top-0 left-0 w-full h-full "
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(0, 0, 0, .9) , rgba(0, 0, 0, .6) , rgba(0, 0, 0, .9) )",
                      }}
                    ></div>
                  </div>
                  <div className="flex  flex-col lg:flex-row items-center gap-4">
                    <div className="text-yellow-500 w-fit">{icons[i]}</div>
                    <h4 className="text-white text-center lg:text-left text-lg lg:text-xl  font-bold capitalize">
                      {category.title}
                    </h4>
                  </div>
                  {/* info */}
                  {/* <div className=" absolute bottom-0 left-0 right-0 m-4  py-4 px-6 rounded-[100px] translate-y-1/2 rounded-tr-none "> */}
                  {/* <div className="flex flex-1 flex-col gap-2 bg-white py-4 px-0.5 text-center items-center justify-between"> */}
                  {/* <h4 className="text-rsayBlack text-lg lg:text-xl xl:text-2xl font-bold capitalize">
                      {category.title}
                    </h4> */}
                  {/* <p className="text-lg  font-medium text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                      sit amet, consectetur ipsum dolor sit amet
                    </p> */}
                  <button
                    onClick={(e) => handleCategoryClick(i)}
                    className="capitalize  font-bold w-fit mx-auto lg:mx-0 transition-all text-lg h-fit rounded-[100px] py-1.5 px-6 bg-white text-primary hover:bg-opacity-55 flex items-center gap-2"
                  >
                    <span>more</span>
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
                        d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                      ></path>
                    </svg>
                  </button>
                  {/* </div> */}
                  {/* <h4 className="mb-[14px] text-gray-900 text-2xl font-semibold capitalize">
                  {translate2(`course${i + 4}.title`)}
                </h4>
                <p className="text-lg lg:text-xl font-medium text-gray-700">
                  {translate2(`course${i + 4}.content`)}
                </p> */}
                </div>
              </div>
            ))}
          </div>
        </ScreenWrapper>
        {/* show all btn */}
        {/* <button
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
        </button> */}
      </section>
      {/* separator */}
      <div className="px-4 w-full ">
        <hr className="w-full max-w-lg mb-6 mx-auto" />
      </div>
      {/* who are we */}
      <div className="px-4">
        <ScreenWrapper className="bg-[#EBF5FF] flex flex-col lg:flex-row justify-between gap-4 rounded-3xl lg:p-6">
          <section className="flex flex-col gap-6 lg:items-start justify-center text-rsayBlack w-fit lg:ps-6">
            <h4 className="text-3xl font-bold text-start capitalize w-fit">
              {translate("who")}
            </h4>
            <p className="text-lg md:text-xl text-start !leading-relaxed font-normal max-w-[700px]">
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
            {/* <LogoSVG/> */}
            <Image
              src={"/images/logo/rsay-logo-Photoroom.png"}
              alt="home more about rsay"
              width={500}
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
