
"use client";
import Image from "next/image";
import Header from "../home/components/Header";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import Footer from "@/app/shared-components/Footer";

export default function Login() {
  return (
    <div className="pt-24 pb-0 min-h-screen flex flex-col">
       <Header />
      <div className="flex flex-1 items-center justify-center gap-12 px-8">
        {}
        <div className="w-[400px] h-[400px] flex items-center justify-center">
          <Image
            src="/cart-phone.png"
            alt="Login Banner"
            width={400}
            height={400}
            className="object-contain rounded-xl"
          />
        </div>
        {}
        <div className="w-[400px] flex flex-col gap-6 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Log in to Exclusive</h2>
          <p className="mb-4 text-gray-600">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email or Phone Number" className="border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" className="border px-4 py-2 rounded" />
            <button type="submit" className="bg-[#DB4444] text-white py-2 rounded font-semibold">Log In</button>
            <button type="button" className="border flex items-center justify-center gap-2 py-2 rounded font-semibold">
              <FaGoogle /> Log in with Google
            </button>
          </form>
          <div className="flex justify-between items-center mt-2 text-sm">
            <Link href="/signup" className="text-[#DB4444] font-semibold">Don&#39;t have an account? Sign Up</Link>
            <Link href="/forgot-password" className="text-[#DB4444] font-semibold">Forgot Password?</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
