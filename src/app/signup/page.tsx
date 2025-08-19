
"use client";
import Header from "../home/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import Footer from "@/app/shared-components/Footer";

export default function SignUp() {
  return (
    <div className="pt-24 pb-0 min-h-screen flex flex-col">
       <Header />
      <div className="flex flex-1 items-center justify-center gap-12 px-8">
        {}
        <div className="w-[400px] h-[400px] flex items-center justify-center">
          <Image
            src="/cart-phone.png"
            alt="Sign Up Banner"
            width={400}
            height={400}
            className="object-contain rounded-xl"
          />
        </div>
        {}
        <div className="w-[400px] flex flex-col gap-6 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="mb-4 text-gray-600">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="border px-4 py-2 rounded" />
            <input type="email" placeholder="Email or Phone Number" className="border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" className="border px-4 py-2 rounded" />
            <button type="submit" className="bg-[#DB4444] text-white py-2 rounded font-semibold">Create Account</button>
            <button type="button" className="border flex items-center justify-center gap-2 py-2 rounded font-semibold">
              <FaGoogle /> Sign up with Google
            </button>
          </form>
          <div className="text-center mt-2 text-sm">
            Already have account? <Link href="/login" className="text-[#DB4444] font-semibold">Log In</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
