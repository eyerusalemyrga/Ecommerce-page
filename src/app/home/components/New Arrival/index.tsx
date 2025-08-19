"use client";
import Image from "next/image";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

export default function NewArrival() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-12">
      {}
      <div>
        <span className="text-red-500 font-semibold text-xs">Featured</span>
        <h2 className="text-2xl font-bold mt-2 mb-8">New Arrival</h2>
      </div>
      {}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {}
        <div className="relative col-span-1 rounded-lg overflow-hidden h-[320px] bg-black flex flex-col justify-end">
          <Image
            src="/images/play station.jpg"
            alt="PlayStation 5"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
          />
          <div className="relative z-10 p-6 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent">
            <h3 className="text-lg font-bold mb-2">PlayStation 5</h3>
            <p className="text-xs mb-3">
              Black and White version of the PS5 coming out on sale.
            </p>
            <a href="#" className="underline text-sm">Shop Now</a>
          </div>
        </div>
        {}
        <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-6 h-[320px]">
          {}
          <div className="relative rounded-lg overflow-hidden bg-black flex items-end h-full row-span-2">
            <Image
              src="/images/echo gen.jpg"
              alt="Women's Collections"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />
            <div className="relative z-10 p-6 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent w-full">
              <h3 className="text-lg font-bold mb-2">Women&apos;s Collections</h3>
              <p className="text-xs mb-3">
                Featured women collections that give you another vibe.
              </p>
              <a href="#" className="underline text-sm">Shop Now</a>
            </div>
          </div>
          {}
          <div className="relative rounded-lg overflow-hidden bg-black flex items-end h-full">
            <Image
              src="/images/shop online.jpg"
              alt="Speakers"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />
            <div className="relative z-10 p-4 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent w-full">
              <h3 className="text-base font-bold mb-2">Speakers</h3>
              <p className="text-xs mb-3">Amazon wireless speakers</p>
              <a href="#" className="underline text-sm">Shop Now</a>
            </div>
          </div>
          {}
          <div className="relative rounded-lg overflow-hidden bg-black flex items-end h-full">
            <Image
              src="/images/gucci oud.jpg"
              alt="Perfume"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />
            <div className="relative z-10 p-4 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent w-full">
              <h3 className="text-base font-bold mb-2">Perfume</h3>
              <p className="text-xs mb-3">Gucci Intense Oud EDP</p>
              <a href="#" className="underline text-sm">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
      {}
      <div className="grid grid-cols-3 gap-8 px-8">
        <div className="flex flex-col items-center text-center">
          <FaShippingFast className="text-2xl text-black mb-2" />
          <h4 className="font-bold mb-1">FREE AND FAST DELIVERY</h4>
          <p className="text-xs text-gray-500">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaHeadset className="text-2xl text-black mb-2" />
          <h4 className="font-bold mb-1">24/7 CUSTOMER SERVICE</h4>
          <p className="text-xs text-gray-500">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaUndo className="text-2xl text-black mb-2" />
          <h4 className="font-bold mb-1">MONEY BACK GUARANTEE</h4>
          <p className="text-xs text-gray-500">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
  );
}