"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    oldPrice: 160,
    price: 120,
    discount: "-40%",
    rating: 4.5,
    reviews: 88,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    oldPrice: 160,
    price: 96,
    discount: "-35%",
    rating: 4.5,
    reviews: 75,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    oldPrice: 400,
    price: 370,
    discount: "-30%",
    rating: 5,
    reviews: 99,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    oldPrice: 400,
    price: 375,
    discount: "-25%",
    rating: 4.5,
    reviews: 99,
    image: "/images/product4.jpg",
  },
];
const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });
 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="bg-white p-6 mt-4 rounded-lg shadow">
      {}
     <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <div>
            <h2 className="text-red-600 font-semibold">Today’s</h2>
            <h2 className="text-2xl font-bold">Flash Sales</h2>
          </div>
          {}
          <div className="flex space-x-4 items-center">
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-lg font-bold text-gray-900">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-xs text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
      <div
            key={product.id}
            className="relative border rounded-lg p-4 shadow-sm hover:shadow-lg transition flex flex-col justify-between h-full"
          >
            {}
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </span>
            {}
            <div className="flex justify-center items-center h-40">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            {}
            <div className="mt-4 text-center flex flex-col justify-between flex-grow">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <div className="flex justify-center items-center gap-2 mt-1">
                <span className="text-red-600 font-bold">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
              </div>
              {}
              <div className="flex justify-center items-center text-yellow-500 text-sm mt-2">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
                <span className="ml-1 text-gray-600 text-xs">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow">
          View All Products
        </button>
      </div>
    </div>
  );
};
export default FlashSale;



