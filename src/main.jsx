import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './Index/Index'
import "bootstrap/dist/css/bootstrap.css";
import './global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode >
      <Index/>
  </StrictMode>,
)
