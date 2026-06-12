"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import ReviewCard from "@/app/components/ReviewCard";

interface BusinessReview {
  id: string;
  name: string;
  comment: string;
  rating: number;
  createdAt: string;
}

export default function BusinessReviewsSection() {
  const [reviews, setReviews] = useState<BusinessReview[]>([
    {
      id: "1",
      name: "John Doe",
      comment:
        "Excellent service and very professional staff. Highly recommended.",
      rating: 5,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Sarah Smith",
      comment:
        "Great experience overall. Will definitely come back again.",
      rating: 4,
      createdAt: new Date().toISOString(),
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  function addReview() {
    if (!name.trim() || !comment.trim()) return;

    const newReview: BusinessReview = {
      id: Date.now().toString(),
      name,
      comment,
      rating,
      createdAt: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);

    setName("");
    setComment("");
    setRating(5);
  }

  const avgRating =
    reviews.length > 0
      ? reviews.reduce(
          (acc, review) => acc + review.rating,
          0
        ) / reviews.length
      : 0;

  return (
    <section className="mt-10">
      {/* Rating Header */}
      <div className="flex items-center gap-2 mb-6">
        <Star
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />

        <span className="font-semibold text-base">
          {avgRating.toFixed(1)}
        </span>

        <span className="text-sm text-gray-500">
          ({reviews.length} reviews)
        </span>
      </div>

      {/* Review Form */}
      <div
        className="
          bg-white
          rounded-2xl
          p-4
          sm:p-5
          shadow-[0_8px_30px_rgba(0,0,0,0.05)]
        "
      >
        <h3 className="font-semibold text-lg mb-4">
          Leave a Review
        </h3>

        <div className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="
              w-full
              h-11
              px-4
              rounded-xl
              bg-gray-100
              text-sm
              outline-none
              transition
              focus:bg-white
              focus:ring-2
              focus:ring-violet-100
            "
          />

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience..."
            rows={4}
            className="
              w-full
              p-4
              rounded-xl
              bg-gray-100
              text-sm
              outline-none
              resize-none
              transition
              focus:bg-white
              focus:ring-2
              focus:ring-violet-100
            "
          />

          <select
            value={rating}
            onChange={(e) =>
              setRating(Number(e.target.value))
            }
            className="
              w-full
              h-11
              rounded-xl
              bg-gray-100
              px-4
              text-sm
              outline-none
              border-0
            "
          >
            <option value={5}>
              ⭐⭐⭐⭐⭐ 5 Stars
            </option>

            <option value={4}>
              ⭐⭐⭐⭐ 4 Stars
            </option>

            <option value={3}>
              ⭐⭐⭐ 3 Stars
            </option>

            <option value={2}>
              ⭐⭐ 2 Stars
            </option>

            <option value={1}>
              ⭐ 1 Star
            </option>
          </select>

          <button
            onClick={addReview}
            className="
              w-full
              h-11
              rounded-xl
              bg-violet-600
              text-white
              text-sm
              font-medium
              transition-all
              duration-200
              hover:bg-violet-700
              hover:-translate-y-0.5
              active:translate-y-0
            "
          >
            Submit Review
          </button>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-4 mt-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="
              bg-white
              rounded-2xl
              p-4
              shadow-[0_4px_24px_rgba(0,0,0,0.05)]
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              transition-all
              duration-300
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-sm">
                  {review.name}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {new Date(
                    review.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-0.5 flex-shrink-0">
                {Array.from({
                  length: review.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />
                ))}
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}