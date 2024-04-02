import { createSlice } from "@reduxjs/toolkit";
const themeSaved = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : "cyberpunk";
export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: themeSaved,
  },
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "dark") {
        state.theme = "cyberpunk";
      } else {
        state.theme = "dark";
      }
    },
    darkTheme: (state) => {
      state.theme = "dark";
    },
    cyberpunkTheme: (state) => {
      state.theme = "cyberpunk";
    },
  },
});
export const { changeTheme, darkTheme, cyberpunkTheme } = themeSlice.actions;

