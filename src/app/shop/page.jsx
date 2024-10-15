import React from 'react'
import Header from '../Components/Header'
import Products from './Product'
import Footer from '../Components/Footer'

export default function page() {
  return (
    <>
    <Header/>
   <main className='mt-5'>
    <Products/>
   </main>
   <Footer/>
    </>
   
  )
}
