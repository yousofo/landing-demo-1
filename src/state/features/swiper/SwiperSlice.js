import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  swiper: null,
};

const swiperSlice = createSlice({
  name: "swiper",
  initialState,
  reducers: {
    setSwiper: (state, action) => {
      state.swiper = action.payload;
    },
  },
});

export const { setSwiper } = swiperSlice.actions;
export default swiperSlice.reducer;