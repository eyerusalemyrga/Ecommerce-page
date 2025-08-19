"use client";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";
import { MdWatch } from "react-icons/md";

const categories = [
  { name: "Phones", icon: <FaMobileAlt size={40} /> },
  { name: "Computers", icon: <FaLaptop size={40} /> },
  { name: "SmartWatch", icon: <MdWatch size={40} /> },
  { name: "Camera", icon: <FaCamera size={40} /> },
  { name: "HeadPhones", icon: <FaHeadphones size={40} /> },
  { name: "Gaming", icon: <FaGamepad size={40} /> },
];

export default function CategoryBrowse() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mt-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-red-500 font-semibold text-xs">Categories</span>
          <h2 className="text-2xl font-bold mt-2">Browse By Category</h2>
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
   <div className="grid grid-cols-6 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={cat.name}
            className={`flex flex-col items-center justify-center border rounded-lg p-6 transition cursor-pointer ${
              idx === 3
                ? "bg-red-500 text-white border-red-500"
                : "hover:bg-gray-50"
            }`}
          >
            <div className={`mb-2 ${idx === 3 ? "text-white" : "text-black"}`}>{cat.icon}</div>
            <span className={`font-medium text-sm ${idx === 3 ? "text-white" : "text-black"}`}>{cat.name}</span>
          </div>
        ))}
      </div>
      <hr className="mt-8" />
    </div>
  );
}