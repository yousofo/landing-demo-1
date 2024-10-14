"use client";

import React, { useEffect, useState } from "react";
import ScreenWrapper from "../shared/ScreenWrapper";
import "./style/header.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenNavList } from "@/state/features/navList/navListSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Header = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const translate = useTranslations('Header');
  // t('title')
  const pathname = usePathname();
  const swiper = useSelector((store) => store.swiper.swiper);
  const router = useRouter();
  const locale = useLocale(); // Get the current locale (e.g., 'en' or 'ar')

  const searchParams = useSearchParams(); // Preserve query params
  function handleLinkClick(e, i) {
    e.preventDefault();
    swiper.slideTo(i);
  }
  const switchLocale = (locale) => {
    // Extract current locale from the path (e.g., "/en/about" -> "en")
    const pathSegments = pathname.split('/').filter(Boolean); // Split and remove empty segments
    const currentLocale = pathSegments[0]; // First segment is the locale
  
    // If the first segment is a locale, remove it
    const newPathname =
      ['en', 'ar'].includes(currentLocale) // Check if it's a valid locale
        ? pathSegments.slice(1).join('/') // Remove locale
        : pathSegments.join('/'); // No locale in path
  
    // Construct the new path with the selected locale
    const newUrl = `/${locale}${newPathname ? `/${newPathname}` : ''}${
      searchParams ? `?${searchParams}` : ''
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
    })
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
    {
      name: translate("contact"),
      link: "/contact",
    },
  ];

  return (
    <header
      className={`bg-white  transition-all main-header  sticky  top-0 z-40  py-2  lg:py-0 ${
        scrolled ? "scrolled" : ""
      } `}
      // 
    >
      <ScreenWrapper className="flex justify-between items-center py-0 h-full">
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, 0)}
          className="text-primary font-bold text-3xl lg:text-5xl flex relative items-center logo active"
          dir="ltr"
        >
          <span>R</span>
          <span>S</span>
          <span>A</span>
          <span>Y</span>
          <span className="p-1.5 rounded-full border border-primary">
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
          </span>
        </Link>

        <div className="flex items-center gap-2 lg:gap-4">
          <div className="flex [&>button]:text-lg font-medium">
            {locale === "en" ? (
              <button
                className="underline"
                onClick={() => switchLocale("ar")}
              >
                العربية
              </button>
            ) : (
              <button
                className="underline  "
                onClick={() => switchLocale("en")}
              >
                English
              </button>
            )}
          </div>
          <nav className="hidden lg:flex h-full items-center">
            {/* <LanguageSwitcher/> */}
            <ul className="h-full">
              {links.map((link, i) => (
                <li key={link.name}>
                  <Link onClick={(e) => handleLinkClick(e, i)} href={link.link}>
                    <span className="capitalize text-lg font-semibold">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-2 lg:gap-4 lg:hidden">
          <Link
            href="/contact"
            onClick={(e) => handleLinkClick(e, 4)}
            className="text-primary hover:bg-primary hover:text-white transition-all font-bold text-xs uppercase border border-primary px-2 lg:px-4 py-1 rounded"
          >
            contact us
          </Link>
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
