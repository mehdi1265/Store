import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'; 
import Home from './Home'
import { AppProvider } from './NewContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPages from './CategoryPages';
import BuyPage from './BuyPage';
import Login from './login';


export default function App() {
  const [count, setCount] = useState(0)

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/products" element={<CategoryPages />} />
         <Route path="/cart" element={<BuyPage />} />
         <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
      
   
  )
}

 
