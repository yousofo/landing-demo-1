"use client";

import React, { useEffect, useState } from "react";
import ScreenWrapper from "../shared/ScreenWrapper";
import "./style/header.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenNavList } from "@/state/features/navList/navListSlice";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const swiper = useSelector((store) => store.swiper.swiper);
  useEffect(() => {
    const logoInterval = setInterval(() => {
      document.querySelector(".logo").classList.remove("active");
      const logoTimeout = setTimeout(() => {
        document.querySelector(".logo").classList.add("active");
        clearTimeout(logoTimeout);
      }, 2000);
    }, 10000);
    return () => {
      clearInterval(logoInterval);
    };
  }, []);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "cyber Security Services",
      link: "/cyberSecurityServices",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  function handleLinkClick(e, i) {
    e.preventDefault();
    swiper.slideTo(i);
  }
  return (
    <header
      className={`bg-white  transition-all main-header  sticky  top-0 z-40  py-2  lg:py-0 ${
        scrolled ? "scrolled" : ""
      } ${!(pathname === "/") ? "scrolled2" : ""} drop-shadow`}
    >
      <ScreenWrapper className="flex justify-between items-center py-0 h-full">
        <Link
          href="/"
          className="text-primary font-bold text-3xl lg:text-5xl flex relative items-center logo active"
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
        <nav className="hidden lg:block h-full">
          <ul className="h-full">
            {links.map((link, i) => (
              <li key={link.name}>
                <Link onClick={(e) => handleLinkClick(e, i)} href={link.link}>
                  <span className="capitalize">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            href="/contact"
            onClick={(e) => handleLinkClick(e, 4)}
            className="text-primary hover:bg-primary hover:text-white transition-all font-bold text-xs uppercase border border-primary px-4 py-1 rounded"
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
