'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-black min-h-[70px] tracking-wide relative z-50">
        <div className="flex items-center justify-between w-full">
          <Link href='/' className='no-underline'>
            <div className="text-2xl italic font-bold text-white cursor-pointer">
              <span style={{ fontFamily: 'Pacifico' }}>Kick Cartel</span>
            </div>
          </Link>
          <nav>
            <button onClick={toggleMenu} className="lg:hidden">
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-16 6h16'}
                />
              </svg>
            </button>
            <ul
              className={`${
                isOpen ? 'flex' : 'hidden'
              } lg:flex flex-col lg:flex-row gap-x-8 items-center mt-3 pl-5`}
            >
              <li>
                <Link href="/" className="text-white underline-offset-4 hover:no-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#shop" className="text-white underline-offset-4 hover:no-underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white underline-offset-4 hover:no-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white underline-offset-4 hover:no-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
