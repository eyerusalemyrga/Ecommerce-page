"use client";
import Image from "next/image";

const Banner = () => {
  return (
<div className="relative h-128 rounded-lg overflow-hidden shadow-lg mb-8 max-w-7xl mx-auto w-full bg-black p-8 flex flex-col justify-center">
{ }
<Image
      src="/images/banner.jpg"
        alt="Banner"
        layout="fill"
        objectFit="contain"
        object-position="70% 80%"
  
        priority
        className="opacity-50"
      />
      <span className="text-white text-xs mb-2">iPhone 14 Series</span>
      <h2 className="text-white text-3xl font-bold mb-4">Up to 10% off Voucher</h2>
      <a
        href="#"
        className="inline-block px-6 py-2 bg-white text-black rounded font-semibold shadow hover:bg-gray-200 transition w-max"
      >
        Shop Now →
      </a>
    </div>
  );
};

export default Banner;
