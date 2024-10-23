"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategories: [],
  categoryPage: 0,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.activeCategories = action.payload;
    },
    setCategoryPage: (state, action) => {
      state.categoryPage = action.payload;
    },
    toggleResetCategories: (state) => {
      return initialState;
    },
  },
});

export const { setCategories, toggleResetCategories, setCategoryPage } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
