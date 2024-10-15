"use client";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { useTranslations } from "next-intl";
import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

const About = () => {
  const swiper = useSelector((store) => store.swiper.swiper);
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  const translateCourses = useTranslations("courses");
  const translateAbout = useTranslations("about");
  const images = [
    "/images/placeholders/softwareengineering.jpeg",
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/cloud-computing-900x600.jpg",
    "/images/placeholders/quality-management.webp",
    "/images/placeholders/Digital-transformation-for-organisations-1080x609.jpg",
    "/images/placeholders/cybersecurity.jpg",
    "/images/placeholders/risk-management.jpg",
  ];
  return (
    <section className="flex-1 flex-col bg-white">
      {/* first section */}
      <div className="w-full  h-[400px] mx-auto 2x l:rounded-2xl overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-60"></div>
        {/* <div className="w-full h-full absolute top-0 left-0 z-20 bg-slate-200 opacity-5"></div> */}
        <img
          className="w-full blur-sm h-full object-cover absolute z-10"
          src="/images/background/about-bg.webp"
          alt=""
        />
        <ScreenWrapper className="relative z-30 flex flex-col h-full gap-4 items-center justify-center">
          <h1 className="text-5xl font-bold text-white uppercase">About Us</h1>
          <p className="text-2xl text-white font-semibold text-center">
            A goal properly set with{" "}
            <span
              style={{ animationDuration: "3s" }}
              className="font-bold animate-pulse underline italic pe-1"
            >
              RSAY
            </span>{" "}
            is halfway reached!
          </p>
        </ScreenWrapper>
      </div>
      <ScreenWrapper className="flex flex-col items-center pt-8 text-rsayBlack text-center">
        <h1 className="text-3xl font-bold w-full pb-2 border-b-2 max-w-60">{translateAbout("section1.first")}</h1>
        <p className="text-xl font-semibold pt-2">{translateAbout("section1.second")}</p>
      </ScreenWrapper>
      {/* courses cards */}
      <Marquee>
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              img={images[index]}
              key={`first-${index}`}
              className="w-[300px] h-[200px] bg-white rounded-lg py-4 px-2 overflow-hidden relative group cursor-pointer"
              onClick={() => handleLinkClick(2)}
            >
              <div className="w-full h-full top-0 left-0 z-10 relative  rounded-lg overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-40 p-4"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  src={images[index]}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 z-20 left-0 h-[40%] w-full flex items-start p-7 text-white">
                <h4 className="font-bold text-lg">
                  {translateCourses(`course${index + 1}.title`)}
                </h4>
              </div>
            </div>
          ))}
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <div
              img={images[index]}
              key={`second-${index}`}
              className="w-[300px] h-[200px] bg-white rounded-lg py-4 px-2 overflow-hidden relative group cursor-pointer"
              onClick={() => handleLinkClick(2)}
            >
              <div className="w-full h-full top-0 left-0 z-10 relative  rounded-lg overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-40 p-4"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  src={images[index]}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 z-20 left-0 h-[40%] w-full flex items-start p-7 text-white">
                <h4 className="font-bold text-lg">
                  {translateCourses(`course${index + 1}.title`)}
                </h4>
              </div>
            </div>
          ))}
      </Marquee>
      <ScreenWrapper className="flex flex-col lg:flex-row flex-1 justify-between h-auto  gap-4 items-center py-20">
        <section className="flex-1 flex flex-col gap-4 items-center lg:items-start">
          <h1 className="text-xl capitalize">about us</h1>
          <h4 className="text-4xl font-bold capitalize leading-[1.3] text-center lg:text-start">
            upgrade your security <br /> with us effortlessly
          </h4>
          <p className="text-lg text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            atque autem, voluptates magnam, voluptate rem, necessitatibus
            repellendus voluptatibus facilis dolores doloremque. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </section>
        <section className="flex-1 flex flex-col gap-2">
          <img src="/images/placeholders/team.png" alt="" />
          <div className="flex gap-4 w-full justify-center flex-col lg:flex-row">
            <div className="border rounded-lg p-3">
              <h5 className="text-primary text-xl mb-4">
                33+ years of experience
              </h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="border rounded-lg p-3">
              <h5 className="text-primary text-xl mb-4">120+ projects</h5>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </section>
      </ScreenWrapper>
    </section>
  );
};

export default About;
