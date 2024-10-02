'use client'

import { useEffect } from "react";
import CarouselParent from "./Components/CarouselParent";
import Header from "./Components/Header";
import axios from "axios";
import Products from "./Product";


export default function Home() {
  useEffect(() => {
    async function wakeupserver() {
      const response = await axios.get('https://kick-cartel-backend.onrender.com');
    }
  })
  return (
    <main>
    <Header/> 
    <CarouselParent/>
    <Products/>
    </main>
  );
}
