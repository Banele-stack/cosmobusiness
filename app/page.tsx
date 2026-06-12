"use client";

import BusinessCard from "./components/BusinessCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { businesses } from "./data/businesses";



export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafafa]">
       <Navbar />

       <Hero />
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover Cosmo Businesses
          </h1>

          <p className="text-gray-500 mt-2">
            Trusted local services near you
          </p>
        </div>

        {/* GRID (THIS FIXES LAPTOP VIEW) */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">
          {businesses.map((biz, i) => (
            <BusinessCard key={biz.id} business={biz} index={i} />
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}