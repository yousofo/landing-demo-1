"use client";
import { configureStore } from "@reduxjs/toolkit";
import navListSlice from "./features/navList/navListSlice";
import SwiperSlice from "./features/swiper/SwiperSlice";

export const store = configureStore({
  reducer: {
    navList: navListSlice,
    swiper: SwiperSlice,
  },
});
