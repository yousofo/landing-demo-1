"use client";
import React, { useState } from "react";
import "./style/navList.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleCloseNavList } from "@/state/features/navList/navListSlice";

const NavList = () => {
  const isOpen = useSelector((store) => store.navList.isOpen);
  const dispatch = useDispatch();
  return (
    <div
      className={`nav-list block lg:hidden fixed inset-0 w-screen z-50  bg-white h-full ${
        isOpen ? "open" : ""
      }`}
    >
      <div className="nav-list-header flex justify-between items-center border-b p-4">
        <Link href="/"><h3 className="text-primary font-bold text-2xl">RSAY</h3></Link>
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
          <li>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
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
    </div>
  );
};

export default NavList;
