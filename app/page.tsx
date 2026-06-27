"use client";

import { useEffect, useState } from "react";
import BusinessCard from "./components/BusinessCard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { getBusinesses, Business } from "./services/business.service";

export default function HomePage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const data = await getBusinesses();
        setBusinesses(data);
      } catch (error) {
        console.error("Failed to fetch businesses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Discover Cosmo Businesses
          </h1>

          <p className="text-gray-500 mt-2">
            Trusted local services near you
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">
            Loading businesses...
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {businesses.map((biz, i) => (
              <BusinessCard
                key={biz.id}
                business={biz}
                index={i}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}