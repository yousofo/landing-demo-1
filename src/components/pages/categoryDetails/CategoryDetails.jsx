"use client";
import Image from "next/image";
import React from "react";
import "./styles/styles.css";
import { useSelector } from "react-redux";
import categoriesEn from "@/../messages/en.json";
import categoriesAr from "@/../messages/ar.json";
import { useTranslations } from "next-intl";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
// import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

const CategoryDetails = () => {
  const currentCategory = useSelector((store) => store.categories.categoryPage);
  const swiper = useSelector((store) => store.swiper.swiper);
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  // /images/placeholders/cybersecurity.jpg
  const tranlateInfo = useTranslations("info");
  let category;

  if (tranlateInfo("lang") === "ar") {
    category = categoriesAr.HomePage.categories[currentCategory];
  } else {
    category = categoriesEn.HomePage.categories[currentCategory];
  }
  return (
    <div className="category-details relative bg-white">
      <div className="img">
        <Image
          fill={true}
          objectFit="cover"
          src="/images/background/category-details.webp"
          alt=""
        />
      </div>
      <div className="screen relative py-14 z-20">
        <ScreenWrapper className=" flex flex-col gap-16 items-center">
          {/* hero */}
          <div className="text text-center text-white flex flex-col gap-4 md:gap-8 items-center py-8">
            {/* icons */}
            <div className="icons flex gap-4">
              {/* web */}
              <div>
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                  >
                    <g fill="none">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M25 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v13.941"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeWidth={4}
                        d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={4}
                        d="M32 35h12m-6-6v12"
                      ></path>
                      <circle
                        r={2}
                        fill="currentColor"
                        transform="matrix(0 -1 -1 0 10 14)"
                      ></circle>
                      <circle
                        r={2}
                        fill="currentColor"
                        transform="matrix(0 -1 -1 0 16 14)"
                      ></circle>
                    </g>
                  </svg>
                </div>
                {/* <p>ease</p> */}
              </div>
              {/* responsive */}
              <div>
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M4 6v10h5v-4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4h2V6zM0 20v-2h4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h4v2h-6a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm11.5 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m4 0a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5M13 20v1h1v-1zm-2-8v7h5v-7z"
                    ></path>
                  </svg>
                </div>
                {/* <p>responsive</p> */}
              </div>
              {/* performance */}
              <div>
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 22.007H5v-2h10ZM22 4l-4.735 5.955l-.22.27l-5.63 7.19a2.001 2.001 0 1 1-2.83-2.83ZM2.645 7.234A10.84 10.84 0 0 0 1.19 15H2v-1a9.7 9.7 0 0 1 1.69-5.52ZM12 2a10.96 10.96 0 0 0-8.119 3.597L5.025 6.96A7.43 7.43 0 0 1 10 5a7.43 7.43 0 0 1 4.997 1.978l3.55-2.802A10.94 10.94 0 0 0 12 2m6.83 9.2l-.233.287l-.728.93A10 10 0 0 1 18 14v1h4.81a10.88 10.88 0 0 0-1.183-7.318Z"
                    ></path>
                  </svg>
                </div>
                {/* <p>performance</p> */}
              </div>
              {/* secure */}
              <div>
                <div className="icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 256 256"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={16}
                    >
                      <path d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"></path>
                      <path d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"></path>
                      <path d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"></path>
                      <path d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"></path>
                      <path d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"></path>
                    </g>
                  </svg>
                </div>
                {/* <p>security</p> */}
              </div>
            </div>
            {/* category title */}
            <h2 className="title text-3xl md:text-5xl font-bold  uppercase">
              {category.title}
            </h2>
            {/* category overview */}
            <p className="overview max-w-screen-lg leading-relaxed text-base md:text-xl">
              {category.overview}
            </p>
            {/* to companies contact (4) */}
            <button
              className="capitalize text-white bg-primary hover:bg-primary hover:ring-4 hover:outline-none hover:ring-primary font-semibold rounded-xl text-lg px-8 py-2.5 text-center transition-all hover:bg-opacity-50"
              onClick={() => handleLinkClick(4)}
            >
              let's talk
            </button>
          </div>
          {/* importance */}
          <div className="max-w-screen-lg bg-white rounded-3xl p-6 pb-2 drop-shadow-lg border w-full">
            <h3 className="text-3xl font-bold text-rsayBlack text-center mb-4 underline decoration-primary">
              Why is This Service Crucial?
            </h3>
            <Swiper
              spaceBetween={0}
              pagination={{ clickable: true }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // onSlideChange={() => (document.documentElement.scrollTop = 0)}
              onSwiper={(swiper) => console.log("hi")}
              className="w-full h-min !pb-6"
              modules={[Autoplay, Pagination]}
              allowTouchMove={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
            >
              {category.importance.map((item, i) => (
                <SwiperSlide className="text-rsayBlack text-center" key={i}>
                  <div className="p-4" key={i}>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-lg">{item.info}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* benefits | features */}
          <section className="w-full flex justify-between  items-start gap-16">
            {/* benefits | features */}
            <div className="text-rsayBlack bg-white rounded-2xl p-4 text-center flex-1">
              <h3 className="text-3xl font-bold text-rsayBlack  mb-6 underline decoration-primary">
                Features
              </h3>
              <ul className="flex flex-col gap-4 ">
                {category.benefits.map((item, i) => (
                  <li key={i} className="">
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <ul className="text-lg">
                      {item.info.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            {/* importance list */}
            {/* <div className="text-rsayBlack bg-white rounded-2xl p-4 drop-shadow-lg border max-w-[400px]">
              <h3 className="text-3xl font-bold text-rsayBlack text-center mb-6">
                Why is This Service Crucial?
              </h3>
              <ul className=" justify-center text-center flex flex-wrap">
                {category.importance.map((item, i) => (
                  <li className="p-4" key={i}>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-lg">{item.info}</p>
                  </li>
                ))}
              </ul>
            </div> */}
          </section>
        </ScreenWrapper>
      </div>
    </div>
  );
};

export default CategoryDetails;
