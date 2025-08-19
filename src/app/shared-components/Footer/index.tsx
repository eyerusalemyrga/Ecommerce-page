"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-10 pb-4">
      {}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-2">Exclusive</h3>
          <p>Subscribe</p>
          <p className="text-xs mb-2">Get 10% off your first order</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-1 rounded-l text-black"
            />
            <button className="bg-[#DB4444] px-4 py-1 rounded-r font-semibold">
              &rarr;
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p>71 Illey sarani, Dhaka, DH 1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+0885-65896-5589</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
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
          <h3 className="font-bold mb-2">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex gap-2 mt-2 items-center">
            <Image src="/qr.png" alt="QR code" width={60} height={60} />
            <div className="flex flex-col gap-2">
              <Image src="/app-store.png" alt="App Store" width={80} height={24} />
              <Image src="/google-play.png" alt="Google Play" width={80} height={24} />
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      {}
      <div className="w-full mt-8 text-xs text-gray-400 text-center border-t border-gray-800 pt-4">
        © Copyright Exclusive 2022. All right reserved.
      </div>
    </footer>
  );
}
