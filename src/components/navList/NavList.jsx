"use client";
import React, { useState } from "react";
import "./style/navList.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleCloseNavList } from "@/state/features/navList/navListSlice";
import { useRouter } from "next/navigation";

const NavList = () => {
  const isOpen = useSelector((store) => store.navList.isOpen);
  const swiper = useSelector((store) => store.swiper.swiper);

  const dispatch = useDispatch();
  const router = useRouter();
  // function handleClicked(e, link) {
  //   e.preventDefault();
  //   router.push(link);
  //   dispatch(toggleCloseNavList());
  // }
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
      name: "Contact",
      link: "/contact",
    },
  ];
  function handleLinkClick(i){
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
          {
            links.map((link, i) => (
              <li key={i}>
                <button onClick={(e) => handleLinkClick(i)} href={link.link}>
                  <span className="capitalize">{link.name}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
