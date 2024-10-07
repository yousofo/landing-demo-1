"use client";
import { configureStore } from "@reduxjs/toolkit";
import navListSlice from "./features/navList/navListSlice";

export const store = configureStore({
  reducer: {
    navList: navListSlice,
  },
})