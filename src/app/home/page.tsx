"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import FlashSale from "./components/FlashSale";
import Catagory from "./components/Catagory";
import BestSellingProducts from "./components/BestSelling";
import MusicBanner from "./components/MusicBanner";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/New Arrival";
import Footer from "../shared-components/Footer";
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-0 pt-8">
      {}
      <div className="flex gap-6 mb-10">
        {}
        <Header />
        <div className="w-64">
          <Sidebar />
        </div>
        {}
        <div className="flex-1">
          <Banner />
        </div>
      </div>
      {}
      <div>
        <FlashSale />
        <Catagory />
        <BestSellingProducts />
        <MusicBanner />
        <ExploreProducts />
        <NewArrival />
        <Footer />
        
      </div>

    </div>
  );
}