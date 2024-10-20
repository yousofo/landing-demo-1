"use client";
import { configureStore } from "@reduxjs/toolkit";
import navListSlice from "./features/navList/navListSlice";
import SwiperSlice from "./features/swiper/SwiperSlice";
import categoriesSlice from "./features/categories/categoriesSlice.js";

export const store = configureStore({
  reducer: {
    navList: navListSlice,
    swiper: SwiperSlice,
    categories: categoriesSlice,
  },
});
