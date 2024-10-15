import React from 'react';

export default function Footer() {
  return (
    <div className="bg-black text-white p-6">
      <div className="container flex justify-between flex-wrap justify-between">
        <div className="flex-1 mb-4 md-mb-0">
          <h2>Kick Kartel</h2>
        </div>
        <div className="flex-1 md:w-1/2">
          <ul className="flex-col">
            <li>About Us</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="flex-1 md:w-1/2">
          <ul className="flex-col">
            <li>Help Center</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex-1 md:w-1/2">
          <ul className="flex-col">
            <li>Follow Us</li>
            <li><a href="https://www.facebook.com/">Facebook</a></li>
            <li><a href="https://www.instagram.com/">Instagram</a></li>
            <li><a href="https://twitter.com/">Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}