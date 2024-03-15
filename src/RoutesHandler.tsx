import { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { ThemeContext } from './Utils/Theme/ThemeMode.js';
import { Dark, Light } from "./Utils/Theme/Themes.js";
import { ThemeContextEnum } from './Utils/Theme/ThemeEnum.js';

import Header from "./Components/Header/Header";

import ErrorPage from "./Routes/Error/ErrorPage";
import MainPage from "./Routes/Main/MainPage";
import About from './Routes/About/About.js';

import './Assets/App.css';

function App() {
  const ThemeInterface = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={ThemeInterface.Theme == ThemeContextEnum.Dark ? Dark : Light}>
        <CssBaseline/>

        <Header />

        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
