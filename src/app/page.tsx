"use client";
import Header from "./home/components/Header";
import Sidebar from "./home/components/Sidebar";
import Banner from "./home/components/Banner";
import FlashSale from "./home/components/FlashSale";
import Catagory from "./home/components/Catagory"
import BestSellingProducts from "./home/components/BestSelling";
import MusicBanner from "./home/components/MusicBanner";
import ExploreProducts from "./home/components/ExploreProducts";
import NewArrival from "./home/components/New Arrival";
import Footer from "./shared-components/Footer";

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