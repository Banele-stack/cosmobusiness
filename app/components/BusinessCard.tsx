"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, BadgeCheck } from "lucide-react";

export default function BusinessCard({
  business,
  index = 0,
}: any) {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const today = days[new Date().getDay()];
  const todayHours = business.operatingHours?.[today];

  // 👉 Get current time in HH:mm (local device time = South Africa time for your user)
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  function timeToMinutes(t: string) {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  }

  let isOpen = false;

  if (todayHours && todayHours !== "Closed") {
    const [open, close] = todayHours.split(" - ");
    const openMinutes = timeToMinutes(open);
    const closeMinutes = timeToMinutes(close);

    isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
    >
      <Link href={`/business/${business.id}`}>
        <div className="group bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

          {/* IMAGE */}
          <div className="relative overflow-hidden h-60">
            <Image
              src={business.images[0]}
              alt={business.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
              priority={index === 0}
            />

            {/* Category */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md text-xs font-semibold text-violet-700">
              {business.category}
            </div>

            {/* Rating */}
            <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full flex items-center gap-1">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{business.rating}</span>
            </div>

            {/* Verified */}
            <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 text-green-700 flex items-center gap-1">
              <BadgeCheck size={12} />
              Verified
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-5">

            <h3 className="font-bold text-lg line-clamp-1">
              {business.name}
            </h3>

            {/* LOCATION */}
            <div className="flex items-center gap-1 mt-2 text-gray-500">
              <MapPin size={15} />
              <span className="text-sm">
                {business.location.address}
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm text-gray-600 line-clamp-2">
              {business.description}
            </p>

            {/* OPENING STATUS */}
            {business.operatingHours && (
              <div className="mt-3 text-xs">
                <span
                  className={`font-semibold ${
                    isOpen ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {isOpen ? "Open now" : "Closed"}
                </span>

                <span className="text-gray-500 ml-2">
                  • Today: {todayHours}
                </span>
              </div>
            )}

            {/* FOOTER (NO BORDER CHANGE — LEFT CLEAN) */}
            <div className="flex items-center justify-between mt-5 pt-4">
              <span className="text-sm text-gray-500">
                {business.reviewCount ?? 0} reviews
              </span>

              <span className="text-violet-600 font-semibold group-hover:translate-x-1 transition-transform">
                View →
              </span>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}