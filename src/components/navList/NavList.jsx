"use client";
import React, { useState } from "react";
import "./style/navList.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleCloseNavList } from "@/state/features/navList/navListSlice";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const NavList = () => {
  const isOpen = useSelector((store) => store.navList.isOpen);
  const swiper = useSelector((store) => store.swiper.swiper);
  const translate = useTranslations("Header");
  const dispatch = useDispatch();
  const router = useRouter();
  const locale = useLocale(); // Get the current locale (e.g., 'en' or 'ar')
  const pathname = usePathname();

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
    dispatch(toggleCloseNavList());
  };
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
    // {
    //   name: translate("contact"),
    //   link: "/contact",
    // },
  ];
  function handleLinkClick(i) {
    // e.preventDefault();
    dispatch(toggleCloseNavList());
    swiper.slideTo(i);
  }
  return (
    <div
      className={`nav-list block lg:hidden fixed inset-0 w-screen z-50  bg-white h-full ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="nav-list-header flex justify-between items-center border-b p-4">
        <button onClick={() => handleLinkClick(0)}>
          <h3 className="text-primary font-bold text-2xl">RSAY</h3>
        </button>
        <button
          onClick={() => dispatch(toggleCloseNavList())}
          className="text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            ></path>
          </svg>
        </button>
      </div>
      <nav>
        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <button onClick={(e) => handleLinkClick(i)} href={link.link}>
                <span className="capitalize">{link.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex  p-4 [&>button]:text-lg font-medium">
        {locale === "en" ? (
          <button
            className="underline border bg-primary border-primary px-4 py-0.5 rounded-lg text-white"
            onClick={() => switchLocale("ar")}
          >
            العربية
          </button>
        ) : (
          <button
            className="underline border bg-primary border-primary px-4 py-0.5 rounded-lg text-white  "
            onClick={() => switchLocale("en")}
          >
            English
          </button>
        )}
      </div>
    </div>
  );
};

export default NavList;
