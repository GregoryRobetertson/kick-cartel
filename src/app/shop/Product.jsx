'use client';

import axios from "axios";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Cart";
import Cart from "../ShoppingCart";

export default function Products() {
    const [products, setProducts] = useState([]);
    const { cartItems, addToCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const toggle = () => {
        setShowModal(prev => !prev);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://kick-cartel-backend.onrender.com/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='bg-black min-h-screen flex flex-col' id="shop">
            <header className='flex justify-between items-center p-3 bg-black'>
                <h1 className='text-3xl font-bold text-white uppercase'>Shop</h1>
                <button 
                    className='px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                    onClick={toggle}
                >
                    Cart ({cartItems.length})
                </button>
            </header>
            <main className='flex-grow p-10 bg-gray-100'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {products.map(product => (
                        <div key={product.id} className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'>
                            <Image 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className='w-full h-48 object-cover' 
                                width={300} // Set these to match the actual image dimensions
                                height={300} // Set these to match the actual image dimensions
                            />
                            <div className='p-4'>
                                <h2 className='text-lg font-bold text-black uppercase'>{product.name}</h2>
                                <p className='mt-2 text-gray-700 text-sm'>{product.description.slice(0, 40)}...</p>
                                <p className='mt-2 text-black font-semibold'>${product.price}</p>
                            </div>
                            <div className='flex justify-between items-center p-4 bg-gray-100'>
                                <button 
                                    onClick={() => addToCart(product)} 
                                    className='p-2 bg-red-700 text-white font-semibold rounded-lg shadow-lg  hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Cart showModal={showModal} toggle={toggle} />
        </div>
    );
}
