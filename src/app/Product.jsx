import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function wakeupServer() {
            try {
                const response = await axios.get('https://kick-cartel-backend.onrender.com/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        wakeupServer();
    }, []);

    return (
        <div className='bg-black min-h-screen flex flex-col'>
            <header className='flex justify-between items-center p-3  bg-black'>
                <h1 className='text-3xl font-bold text-white uppercase'>Shop</h1>
            </header>
            <main className='flex-grow p-10 bg-gray-100'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map(product => (
                        <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
                            <Image 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className='w-full h-48 object-cover' 
                                width={300} 
                                height={300} 
                            />
                            <div className='p-4'>
                                <h2 className='text-lg font-bold text-black uppercase'>{product.name}</h2>
                                <p className='mt-2 text-gray-700 text-sm'>{product.description.slice(0, 40)}...</p>
                                <p className='mt-2 text-black font-semibold'>${product.price}</p>
                            </div>
                            <div className='flex justify-between items-center p-4 bg-gray-100'>
                                <button className='w-full bg-red-600 text-white text-xs font-bold uppercase rounded py-2 hover:bg-red-500 transition duration-200 focus:outline-none'>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
