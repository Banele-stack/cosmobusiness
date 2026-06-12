"use client";

import { use, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Star,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";

import ReviewCard from "@/app/components/ReviewCard";
import { businesses } from "@/app/data/businesses";
import BusinessReviewsSection from "@/app/components/BusinessReviewsSection";

export default function BusinessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const business = businesses.find((b) => b.id === id);

  const [reportOpen, setReportOpen] = useState(false);
  const [reason, setReason] = useState("Fake business");
  const [success, setSuccess] = useState(false);

  if (!business) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Business not found
      </div>
    );
  }

  function submitReport() {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setReportOpen(false);
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        {/* BACK */}
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-4"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        {/* HERO IMAGE */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm">
          <img
            src={business.images[0]}
            alt={business.name}
            className="w-full h-[220px] sm:h-[280px] md:h-[380px] object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-6">
          {/* LEFT */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {business.name}
            </h1>

            <p className="text-violet-600 font-medium mt-2">
              {business.category}
            </p>

            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin size={15} />
                {business.location}
              </div>

              <div className="flex items-center gap-1">
                <Star
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />
                {business.rating}
              </div>

              <div className="flex items-center gap-1 text-green-600">
                <ShieldCheck size={15} />
                Verified Business
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-lg mb-4">
                About this business
              </h2>

              <p className="text-sm text-gray-600 leading-7">
                {business.description}
              </p>
            </div>

            {/* REVIEWS */}
            <BusinessReviewsSection />
          </div>

          {/* SIDEBAR */}
          <div className="hidden lg:block">
            <div className="sticky top-6 bg-white rounded-2xl p-5 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-2xl font-semibold">
                    {business.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Customer Rating
                </p>
              </div>

              <button className="mt-5 w-full h-11 rounded-xl bg-violet-600 text-white flex items-center justify-center gap-2">
                <Phone size={16} />
                Call Business
              </button>

              <button className="mt-3 w-full h-11 rounded-xl border flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                WhatsApp
              </button>

              <button
                onClick={() => setReportOpen(true)}
                className="mt-3 w-full border border-red-500 text-red-500 py-2 rounded-xl text-sm"
              >
                Report Business
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white p-3 z-50 shadow-md">
        <div className="flex gap-2">
          <button className="flex-1 h-11 rounded-xl bg-violet-600 text-white flex items-center justify-center gap-2">
            <Phone size={16} />
            Call
          </button>

          <button className="flex-1 h-11 rounded-xl border flex items-center justify-center gap-2">
            <MessageCircle size={16} />
            WhatsApp
          </button>

          <button
            onClick={() => setReportOpen(true)}
            className="flex-1 border border-red-500 text-red-500 rounded-xl"
          >
            Report
          </button>
        </div>
      </div>

      <div className="h-20 lg:hidden" />

      {/* REPORT MODAL */}
      {reportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl">
            {success ? (
              <div className="text-center py-10">
                <p className="text-green-600 font-bold text-lg">
                  Report submitted successfully ✅
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold">
                  Report Business
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Tell us what's wrong
                </p>

                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full border p-3 mt-4 rounded-xl"
                >
                  <option>Fake business</option>
                  <option>Scam / fraud</option>
                  <option>Wrong information</option>
                  <option>Inappropriate content</option>
                </select>

                <button
                  onClick={submitReport}
                  className="w-full bg-red-600 text-white py-3 mt-4 rounded-xl"
                >
                  Submit Report
                </button>

                <button
                  onClick={() => setReportOpen(false)}
                  className="w-full mt-3 text-sm text-gray-500"
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}