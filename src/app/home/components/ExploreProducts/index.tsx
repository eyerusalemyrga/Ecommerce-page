"use client";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Bread Dry Dog Food",
    image: "/images/cesar dry.jpg",
    price: 100,
    oldPrice: "",
    rating: 5,
    reviews: 35,
    badge: "",
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: "/images/camera.jpg",
    price: 300,
    oldPrice: "",
    rating: 5,
    reviews: 95,
    badge: "",
    showCart: true,
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: "/images/cooler.jpg",
    price: 700,
    oldPrice: "",
    rating: 5,
    reviews: 95,
    badge: "",
  },
  {
    id: 4,
    name: "Curology Product Set",
    image: "/images/nail cleaner.jpg",
    price: 500,
    oldPrice: "",
    rating: 4,
    reviews: 84,
    badge: "",
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: "/images/car.jpg",
    price: 960,
    oldPrice: "",
    rating: 5,
    reviews: 65,
    badge: "NEW",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: "/images/gucci jacket.jpg",
    price: 1160,
    oldPrice: "",
    rating: 5,
    reviews: 35,
    badge: "",
    colors: ["#ffd800", "#08d15f", "#393939"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: "/images/gamepad.jpg",
    price: 660,
    oldPrice: "",
    rating: 5,
    reviews: 65,
    badge: "NEW",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: "/images/coat.jpg",
    price: 660,
    oldPrice: "",
    rating: 5,
    reviews: 65,
    badge: "",
  },
];

export default function ExploreProducts() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-12">
      {}
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-red-500 font-semibold text-xs">Our Products</span>
          <h2 className="text-2xl font-bold mt-2">Explore Our Products</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <span className="material-icons">arrow_back</span>
          </button>
          <button className="p-2 rounded-full border hover:bg-gray-100">
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
      {}
<div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative border rounded-lg p-6 bg-white flex flex-col items-center hover:shadow-lg transition"
          >
            {}
            {product.badge && (
              <span className="absolute top-4 left-4 bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                {product.badge}
              </span>
            )}
            {}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
              <FiEye className="text-gray-400 hover:text-black cursor-pointer" />
            </div>
            {}
            <div className="flex justify-center items-center h-32 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            {}
            {product.showCart && (
              <button className="bg-black text-white px-4 py-2 rounded mb-2 w-full font-semibold">
                Add To Cart
              </button>
            )}
            {}
            <div className="w-full text-left mt-2">
              <h3 className="text-sm font-medium mb-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-bold text-base">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                )}
              </div>
              {}
              {product.colors && (
                <div className="flex gap-2 mt-2 mb-1">
                  {product.colors.map((c, i) => (
                    <span
                      key={i}
                      style={{ backgroundColor: c }}
                      className="inline-block w-4 h-4 rounded-full border"
                    />
                  ))}
                </div>
              )}
              {}
              <div className="flex items-center mt-1">
                <span className="text-yellow-500 text-base">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </span>
                <span className="ml-2 text-xs text-gray-600">({product.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {}
      <div className="flex justify-center mt-8">
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-2 rounded font-semibold shadow w-max">
          View All Products
        </button>
      </div>
    </div>
  );
}