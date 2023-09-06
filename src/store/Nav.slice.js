import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navHeight: 0,
  sliderOn: true,
  sliderWidth: "350px",
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavHeight: (state, action) => {
      state.navHeight = action.payload;
    },
    setSliderWidth: (state, action) => {
      state.sliderWidth = action.payload;
    },
    activeSlider: (state, action) => {
      state.sliderOn = action.payload;
    },
  },
});

export const { setNavHeight, setSliderWidth, activeSlider } =
  navbarSlice.actions;

export default navbarSlice.reducer;
