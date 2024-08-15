'use client';

import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      async function wakeupserver() {
        const response = await axios.get('https://kick-cartel-backend.onrender.com/product');
        setProduct(response.data);
        console.log(response.data);
      }
      wakeupServer();
    }, []) 
    return (
      <>
      </>
    )
  }
  