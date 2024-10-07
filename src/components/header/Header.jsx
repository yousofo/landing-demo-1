"use client";

import React, { useEffect, useState } from "react";
import ScreenWrapper from "../shared/ScreenWrapper";
import "./style/header.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { toggleOpenNavList } from "@/state/features/navList/navListSlice";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // hover:h-[52px] lg:hover:h-[72px]
  console.log(pathname);
  useEffect(() => {
    // const handleScroll = () => {
    //   const scrollTop = window.scrollY || document.documentElement.scrollTop;
    //   if (scrollTop > 0) {
    //     setScrolled(true);
    //     console.log("scrolled");
    //   } else {
    //     console.log("not scrolled");
    //     setScrolled(false);
    //   }
    // };
    // window.addEventListener("scroll", handleScroll);
    const logoInterval = setInterval(() => {
      document.querySelector(".logo").classList.remove("active");
      const logoTimeout = setTimeout(() => {
        document.querySelector(".logo").classList.add("active");
        clearTimeout(logoTimeout);
      }, 2000);
    }, 10000);
    // Cleanup event listener on component unmount
    return () => {
      // window.removeEventListener("scroll", handleScroll);
      clearInterval(logoInterval);
    };
  }, []);
  return (
    <header
      className={`bg-white  transition-all main-header  sticky  top-0 z-40  py-2  lg:py-0 ${
        scrolled ? "scrolled" : ""
      } ${!(pathname === "/") ? "scrolled2" : ""}`}
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
            <li>
              <Link href="/about">
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <span>Our services</span>
              </Link>
            </li>
            <li>
              <Link href="/cyberSecurityServices">
                <span>cyber security services</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span>Contacts</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => dispatch(toggleOpenNavList())}
          className="text-primary lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
      </ScreenWrapper>
    </header>
  );
};

export default Header;
