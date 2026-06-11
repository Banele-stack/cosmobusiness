"use client";

import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessCard({ business, index = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      className="
        bg-white
        border border-gray-100
        rounded-2xl
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-300
      "
    >
      <Link href={`/business/${business.id}`}>

        {/* IMAGE */}
        <div className="relative w-full h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={business.images[0]}
              alt={business.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="p-4">

          <div className="flex justify-between items-start">

            <div>
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-xs text-blue-600 font-medium"
              >
                {business.category}
              </motion.p>

              <h2 className="text-lg font-semibold text-gray-900 mt-1">
                {business.name}
              </h2>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-700">
              <Star size={14} className="text-yellow-500" />
              {business.rating}
            </div>

          </div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.12 }}
            className="flex items-center gap-1 text-gray-500 text-sm mt-2"
          >
            <MapPin size={14} />
            {business.location}
          </motion.div>

          {/* BUTTON */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4"
          >
            <div className="
              text-center
              bg-gray-900
              text-white
              text-sm
              py-2
              rounded-xl
              hover:bg-gray-800
              transition
            ">
              View Business
            </div>
          </motion.div>

        </div>

      </Link>
    </motion.div>
  );
}