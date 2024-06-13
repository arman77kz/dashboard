import { createSlice } from '@reduxjs/toolkit';

const themes = {
  light: {
    colors: {
      background: '#ffffff',
      text: '#000000',
      primary: '#6200ee',
      secondary: '#03dac6',
    },
    spacing: (factor) => factor * 8,
  },
  dark: {
    colors: {
      background: '#000000',
      text: '#ffffff',
      primary: '#bb86fc',
      secondary: '#03dac6',
    },
    spacing: (factor) => factor * 8,
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: themes.light,
  reducers: {
    toggleTheme: (state) => {
      return state === themes.light ? themes.dark : themes.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
export { themes };
