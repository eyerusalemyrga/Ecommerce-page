"use client";
import Header from "../home/components/Header";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="pt-24 pb-0 min-h-screen flex flex-col">
    <Header />
      <div className="flex flex-1 items-center justify-center gap-12 px-8">
        {}
        <div className="w-[1200px] h-[500px] flex items-center justify-center">
          <Image
            src="data:image/jpeg;base64,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"  // Ensure this exists in your public folder!
            alt="Login Banner"
            width={1000}
            height={400}
            className="object-contain rounded-xl"
          />
        </div>
        {}
       <div className="w-[400px] flex flex-col gap-6 bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-2">Login to your account</h2>
          <p className="mb-4 text-gray-600">Enter your details below</p>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email or Phone Number" className="border px-4 py-2 rounded" />
            <input type="password" placeholder="Password" className="border px-4 py-2 rounded" />
            <button type="submit" className="bg-[#DB4444] text-white py-2 rounded font-semibold">Login</button>
            <button type="button" className="border flex items-center justify-center gap-2 py-2 rounded font-semibold">
              <FaGoogle /> Login with Google
            </button>
          </form>
          <div className="text-center mt-2 text-sm">
            Don't have an account? <Link href="/signup" className="text-[#DB4444] font-semibold">Sign Up</Link>
          </div>
        </div>
      </div>
      {}
      <footer className="bg-black text-white mt-16 py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {}
       <div>
            <h3 className="font-bold mb-2">Exclusive</h3>
            <p>Subscribe</p>
            <input type="email" placeholder="Your email" className="mt-2 px-2 py-1 rounded text-black" />
          </div>
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Account</h3>
            <p>My Account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
      <div>
            <h3 className="font-bold mb-2">Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div>
            <h3 className="font-bold mb-1">Download App</h3>
            <div className="flex gap-2">
              <Image src="/images/qr code.jpg" alt="QR" width={40} height={10} />
              <Image src="/images/app store.jpg" alt="App store" width={40} height={10} />
              <Image src="/images/google play.jpg" alt="Google Play" width={40} height={10} />
            </div>
           <div className="flex gap-2 mt-2">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400">© Copyright Rimel 2022. All right reserved</div>
      </footer>
    </div>
  );
}