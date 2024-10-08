import ScreenWrapper from "@/components/shared/ScreenWrapper";
import Link from "next/link";
import React from "react";

const Home = () => {
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
              IMPROVE YOUR SECURITY WITH RSAY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold uppercase flex flex-col text-center md:text-start">
              <span>rsay</span> <span>information technology</span>
              <span className="text-xs">company</span>
            </h1>
            <p className="text-base md:text-lg font-light text-center md:text-start">
              RSAY is a leading technology company specialized in IT Security
              and security services. <br /> We have a team of experts and
              professionals who are experts in all IT services and security.
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={"/about"}
                className="text-white border border-white py-1 px-5 rounded-sm hover:bg-white hover:text-primary transition-all"
              >
                start now
              </Link>
              <Link
                href={"/about"}
                className="text-white border border-primary py-1 px-5 bg-primary rounded-sm hover:bg-white hover:border-primary hover:text-primary transition-all"
              >
                learn more
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
            href="/about"
            className="text-white border border-white py-0.5 px-3 rounded-sm hover:bg-white hover:text-primary transition-all"
          >
            start now
          </Link>
        </p>
      </section>
      <section className="partners bg-gray-900 flex flex-col w-full items-center justify-center gap-8 px-4 py-14 md:h-[300px]  text-white">
        <h3 className="text-2xl">Our Partners</h3>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-0 w-fit py-2">
          <li className="text-lg">example</li>
          <li>example</li>
          <li>example</li>
          <li>example</li>
          <li>example</li>
        </ul>
      </section>
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
