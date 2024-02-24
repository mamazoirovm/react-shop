"use client";

import { useEffect } from "react";

export default function checkout() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const product = cart[productId]; // replace productId with the actual product id
    if (product) {
      console.log(`Price: ${product.total}, Count: ${product.count}`);
    }
  }, []);
  
  return (
    <div className="container">
      <div>
        <ul>
          <li>PRODUCT</li>
          <li>PRICE</li>
          <li>QUANTITY</li>
          <li>QUANTITY</li>
        </ul>
      </div>
    </div>
  );
}
