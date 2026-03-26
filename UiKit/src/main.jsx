
import 'uikit/dist/css/uikit.min.css';
import { Container } from "uikit-react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
       <App />
  Add any child components
</Container>


   
  </StrictMode>,
)
