import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createTheme, ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette: {
    mode: 'dark', // or 'dark'
    primary: {
      main: '#1976d2',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
