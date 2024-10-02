import { useEffect, useState } from "react";


export default function Products() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        const response = await fetch('https://kick-cartel-backend.onrender.com/product')  // fetch the products
        const data = await response.json() // convert the response to json
        setProducts(data.products) // set the products in the state to the products we fetched
      }

      useEffect(() => {
        getProducts()
      }, [])

    return (
      <>
      <div className='flex flex-col justify-center bg-gray-100'>
  <div className='flex justify-between items-center px-20 py-5'>
    <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Shop</h1>
  </div>
  <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
    {
      products.map(product => (
        <div key={product.name} className='bg-white shadow-md rounded-lg px-10 py-10'>
          <img src={product.imageUrl} alt={product.name} className='rounded-md h-48' />
          <div className='mt-4'>
            <h1 className='text-lg uppercase font-bold'>{product.name}</h1>
            <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
            <p className='mt-2 text-gray-600'>${product.price}</p>
          </div>
          <div className='mt-6 flex justify-between items-center'>
            <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'>Add to cart</button>
          </div>
        </div>
      ))
    }
  </div>
</div>
      </>
    )
  }