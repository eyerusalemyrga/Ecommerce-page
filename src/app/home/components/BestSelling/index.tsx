"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "The north coat",
    image: "/images/coat.jpg",
    price: 260,
    oldPrice: 360,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    name: "Gucci duffle bag",
    image: "/images/bag.jpg",
    price: 960,
    oldPrice: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    name: "RGB Liquid CPU Cooler",
    image: "/images/cooler.jpg",
    price: 160,
    oldPrice: 170,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    name: "Small Bookshelf",
    image: "/images/bookshelf.jpg",
    price: 360,
    oldPrice: "",
    rating: 5,
    reviews: 65,
  },
];

export default function BestSellingProducts() {
  return (
<div className="bg-white rounded-lg shadow p-8 mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-red-500 font-semibold text-xs">This Month</span>
          <h2 className="text-2xl font-bold mt-2">Best Selling Products</h2>
        </div>
        <button className="px-6 py-2 bg-red-500 text-white rounded font-semibold shadow hover:bg-red-600 transition w-max">
          View All
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg p-6 bg-white flex flex-col items-center hover:shadow-lg transition"
          >
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
              <FiEye className="text-gray-400 hover:text-black cursor-pointer" />
            </div>
            <div className="flex justify-center items-center h-32 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="w-full text-left mt-2">
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold text-base">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                )}
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-base">
                  {"★".repeat(product.rating)}
                </span>
                <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}