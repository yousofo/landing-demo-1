"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.activeCategories = action.payload;
    },
    toggleResetCategories: (state) => {
      return initialState;
    },
  },
});

export const { setCategories, toggleResetCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
