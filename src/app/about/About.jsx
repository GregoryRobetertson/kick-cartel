
import React from "react";
import { Image } from "react-bootstrap";

export default function About() {
  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mb-10">
        <h1 className="font-extrabold text-4xl text-center">ABOUT US</h1>
        <p className="text-lg mt-4 leading-relaxed">
          At Kick Cartel, we're more than just a shoe store. We're a community of sneaker enthusiasts passionate about delivering the latest and greatest footwear to our customers. Our curated collection features iconic brands like Nike, Jordan, and more, ensuring you have access to the most sought-after kicks on the market.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-3/4 lg:w-1/2 mb-10">
        <img
          src="/images/kick-kartel-store.jpeg" 
          alt="Kick Cartel image" 
          className="rounded-lg shadow-lg w-full mb-4" 
          width={800} // Set your desired width
          height={600} // Set your desired height
        />
        <div className="bg-white text-black p-8 rounded-lg shadow-lg">
          <h2 className="font-bold text-3xl">Why Choose Kick Cartel?</h2>
          <ul className="list-disc space-y-2 mt-2">
            <li>Authenticity Guaranteed: Every pair of shoes we sell is 100% authentic, ensuring you're getting the real deal.</li>
            <li>Unmatched Selection: From classic silhouettes to limited-edition releases, we have something for every sneakerhead.</li>
            <li>Exceptional Customer Service: Our dedicated team is always ready to assist you with any questions or concerns.</li>
            <li>Fast and Reliable Shipping: We offer quick and efficient shipping to get your new kicks to your doorstep as soon as possible.</li>
          </ul>
        </div>
      </div>

      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2 mb-10">
        <h2 className="font-bold text-3xl">Join the Kick Cartel Community</h2>
        <p className="text-lg mt-2 leading-relaxed">
          Whether you're a seasoned collector or just starting your sneaker journey, Kick Cartel is your go-to destination for premium footwear. Sign up for our newsletter to stay updated on the latest releases, exclusive deals, and more.
        </p>
      </div>
    </div>
  );
}
