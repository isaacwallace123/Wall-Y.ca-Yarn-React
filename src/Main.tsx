import App from './RoutesHandler.tsx'

import { createRoot } from 'react-dom/client';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from "react-router-dom";

import ThemeMode from './Utils/Theme/ThemeMode.tsx';

import './Assets/Index.css';

createRoot(document.getElementById('root')!).render(
  <SnackbarProvider autoHideDuration={3000} maxSnack={5}>
    <ThemeMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeMode>
  </SnackbarProvider>
)