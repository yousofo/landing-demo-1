"use client";

import React, { useEffect, useState } from "react";
import ScreenWrapper from "../shared/ScreenWrapper";
import "./style/header.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenNavList } from "@/state/features/navList/navListSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import messagesEn from "@/../messages/en.json";
import messagesAr from "@/../messages/ar.json";
import { setCategoryPage } from "@/state/features/categories/categoriesSlice";

const Header = () => {
  const [contactBtnActive, setContactBtnActive] = useState(false);
  const [langBtnActive, setLangBtnActive] = useState(false);
  const [servicesBtnActive, setServicesBtnActive] = useState(false);
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const translate = useTranslations("Header");
  const tranlateInfo = useTranslations("info");
  // t('title')
  let categories;
  if (tranlateInfo("lang") === "ar") {
    categories = messagesAr.HomePage.categories;
  } else {
    categories = messagesEn.HomePage.categories;
  }

  const swiper = useSelector((store) => store.swiper.swiper);
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale(); // Get the current locale (e.g., 'en' or 'ar')

  const searchParams = useSearchParams(); // Preserve query params

  const switchLocale = (locale) => {
    // Extract current locale from the path (e.g., "/en/about" -> "en")
    const pathSegments = pathname.split("/").filter(Boolean); // Split and remove empty segments
    const currentLocale = pathSegments[0]; // First segment is the locale

    // If the first segment is a locale, remove it
    const newPathname = ["en", "ar"].includes(currentLocale) // Check if it's a valid locale
      ? pathSegments.slice(1).join("/") // Remove locale
      : pathSegments.join("/"); // No locale in path

    // Construct the new path with the selected locale
    const newUrl = `/${locale}${newPathname ? `/${newPathname}` : ""}${
      searchParams ? `?${searchParams}` : ""
    }`;

    // Replace the current URL with the new one
    router.replace(newUrl);
  };

  useEffect(() => {
    const logoInterval = setInterval(() => {
      document.querySelector(".logo").classList.remove("active");
      const logoTimeout = setTimeout(() => {
        document.querySelector(".logo").classList.add("active");
        clearTimeout(logoTimeout);
      }, 2000);
    }, 10000);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
      clearInterval(logoInterval);
    };
  }, []);

  const links = [
    {
      name: translate("home"),
      link: "/",
    },
    {
      name: translate("about"),
      link: "/about",
    },
    {
      name: translate("services"),
      link: "/services",
    },
  ];
  const categoryClicked = (i) => {
    if (i < 3) {
      dispatch(setCategoryPage(i));
      handleLinkClick(5);
    } else {
      handleLinkClick(2);
    }
  };
  return (
    <header
      className={`bg-white  transition-all main-header  h-[60px] sticky  top-0 z-40   lg:py-0 ${
        scrolled ? "scrolled" : ""
      } `}
      //
    >
      <ScreenWrapper className="flex lg:justify-between items-center py-0 h-full">
        <button
          onClick={(e) => handleLinkClick(0)}
          className="text-primary font-bold text-3xl lg:text-5xl flex relative items-center logo active"
          dir="ltr"
        >
          <span>𝓎</span>
          <span>𝑜</span>
          <span>𝓈</span>
          <span>𝑜</span>
          <span>𝒻</span>
          <span>𝑜</span>
          {/* <span className="p-1.5 rounded-full border border-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M10 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7V7a3 3 0 0 1 5.906-.75a1 1 0 0 0 1.936-.5A5 5 0 0 0 10 2"
              ></path>
            </svg>
          </span> */}
        </button>

        <div className="flex ms-auto gap-2 lg:gap-4 items-center h-full">
          {/* nav */}
          <nav className="hidden lg:flex h-full items-center">
            {/* <LanguageSwitcher/> */}
            <ul className="h-full">
              {links.map((link, i) => (
                <li key={link.name}>
                  <button onClick={(e) => handleLinkClick(i)}>
                    <span className="capitalize text-lg font-semibold">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* services */}
          <div
            onClick={() => setServicesBtnActive(!servicesBtnActive)}
            className={`relative no-ani group h-auto p-4 hidden lg:flex`}
          >
            {/* button */}
            <button className="!flex items-center gap-2 relative z-10">
              <span className="capitalize text-lg font-semibold text-primary whitespace-nowrap">
                {translate("services")}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#004aad"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9l-7 7l-7-7"
                ></path>
              </svg>
            </button>
            {/* hidden list  */}
            <div
              className={`absolute bottom-0  right-0 transition-all  w-max h-fit bg-white opacity-0  flex flex-col  rounded-b-md overflow-hidden ${
                servicesBtnActive
                  ? " translate-y-full opacity-100  z-0 "
                  : " -z-10 "
              }  `}
            >
              {categories.map((category, i) => (
                <button
                  key={i}
                  onClick={() => categoryClicked(i)}
                  className="px-4 py-2 hover:bg-primary text-primary hover:text-white transition-all border hover:border-transparent"
                >
                  <span className="capitalize text-lg font-semibold ">
                    {category.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          {/* contact */}
          <div
            onClick={() => setContactBtnActive(!contactBtnActive)}
            className={`relative no-ani group h-auto p-4`}
          >
            {/* button */}
            <button className="!flex items-center gap-2 relative z-10">
              <span className="capitalize text-lg font-semibold text-primary whitespace-nowrap">
                {translate("contact")}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#004aad"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9l-7 7l-7-7"
                ></path>
              </svg>
            </button>
            {/* hidden list  */}
            <div
              className={`absolute bottom-0 z-0  right-0 transition-all  w-max h-fit bg-white opacity-0  flex flex-col border rounded-b-md overflow-hidden ${
                contactBtnActive ? " translate-y-full opacity-100 " : " "
              }  `}
            >
              <button onClick={(e) => handleLinkClick(3)} className="px-4 py-2 hover:bg-primary text-primary hover:text-white transition-all border hover:border-transparent">
                <span className="capitalize text-lg font-semibold ">
                  for universities
                </span>
              </button>
              <button onClick={(e) => handleLinkClick(4)} className="px-4 py-2 hover:bg-primary text-primary hover:text-white transition-all border hover:border-transparent">
                <span className="capitalize text-lg font-semibold ">
                  for companies
                </span>
              </button>
            </div>
          </div>
          {/* language */}
          <div
            onClick={() => setLangBtnActive(!langBtnActive)}
            className="relative hidden md:block no-ani group h-full p-4 cursor-pointer"
          >
            {/* button */}
            <button className="!flex items-center gap-2 relative z-10">
              <span className="capitalize text-lg font-semibold text-primary flex items-center gap-0.5">
                {/* {locale === "en" ? "اللغة" : "Language"} */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.87 15.07l-2.54-2.51l.03-.03A17.5 17.5 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2zm-2.62 7l1.62-4.33L19.12 17z"
                  ></path>
                </svg>
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#004aad"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 9l-7 7l-7-7"
                ></path>
              </svg>
            </button>
            {/* hidden list  */}
            <div
              className={`absolute bottom-0 z-0  right-0 transition-all  w-max h-fit bg-white opacity-0  flex flex-col border rounded-b-md overflow-hidden ${
                langBtnActive ? " translate-y-full opacity-100 " : " "
              }}`}
            >
              <button onClick={(e) => switchLocale("ar")} className="px-4 py-2 hover:bg-primary text-primary hover:text-white transition-all border hover:border-transparent">
                <span className="capitalize text-lg font-semibold">
                  العربية
                </span>
              </button>
              <button onClick={(e) => switchLocale("en")} className="px-4 py-2 hover:bg-primary text-primary hover:text-white transition-all border hover:border-transparent">
                <span className="capitalize text-lg font-semibold">
                  English
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 lg:hidden">
          {/* <button
            onClick={(e) => handleLinkClick(3)}
            className="text-primary hover:bg-primary hover:text-white transition-all font-bold text-xs uppercase border border-primary px-2 lg:px-4 py-1 rounded"
          >
            contact us
          </button> */}
          <button
            onClick={() => dispatch(toggleOpenNavList())}
            className="text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M3 6h18M3 12h18M3 18h18"
              ></path>
            </svg>
          </button>
        </div>
      </ScreenWrapper>
    </header>
  );
};

export default Header;
