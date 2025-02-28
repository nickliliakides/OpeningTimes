import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './App.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008000',
    },
    text: {
      primary: '#001a00',
    },
  },
  typography: {
    h1: {
      fontSize: '2.4rem',
      fontWeight: 600,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
