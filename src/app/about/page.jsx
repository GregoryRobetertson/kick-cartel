import React from 'react';
import Header from '../Components/Header';
import About from './About';
import Footer from '../Components/Footer';



export default function page() {
    return ( 
        <>
         <Header/>
        <main >
         <About/>
        </main>
        <Footer/>
        </>
   
    )
}