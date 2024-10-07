"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navListSlice = createSlice({
  name: "navList",
  initialState,
  reducers: {
    toggleOpenNavList: (state) => {
      state.isOpen = true;
    },
    toggleCloseNavList: (state) => {
      state.isOpen = false;
    },
    toggleNavList: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpenNavList, toggleCloseNavList, toggleNavList } = navListSlice.actions;
export default navListSlice.reducer;
