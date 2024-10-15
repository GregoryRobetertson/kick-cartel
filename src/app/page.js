"use client";

import { useEffect } from "react";
import CarouselParent from "./Components/CarouselParent";
import Header from "./Components/Header";
import axios from "axios";
import Products from "./shop/Product";
import Footer from "./Components/Footer";

export default function Home() {
  useEffect(() => {
    async function wakeupserver() {
      const response = await axios.get(
        "https://kick-cartel-backend.onrender.com"
      );
    }
  });
  return (
    <>
      <Header />
      <main>
        <CarouselParent />
      </main>
      <Footer />
    </>
  );
}
