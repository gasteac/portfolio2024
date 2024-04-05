import { createSlice } from "@reduxjs/toolkit";
const themeSaved = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "gasteacBlack";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: themeSaved,
    isPageLoaded: false,
  },
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "gasteacDark") {
        state.theme = "gasteacLight";
      } else {
        state.theme = "gasteacDark";
      }
    },
    pageLoaded: (state) =>{
      state.isPageLoaded = true
    }
  },
});
export const { changeTheme, pageLoaded } = themeSlice.actions;

