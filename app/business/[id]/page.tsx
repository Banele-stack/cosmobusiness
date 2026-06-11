import BusinessGallery from "@/app/components/BusinessGallery";
import ReviewCard from "@/app/components/ReviewCard";
import { businesses } from "@/app/data/businesses";
import { MapPin, Star } from "lucide-react";


export default function BusinessPage({
  params,
}: {
  params: { id: string };
}) {
  const business = businesses.find((b) => b.id === params.id);

  if (!business) return <div>Business not found</div>;

  return (
    <main className="max-w-md mx-auto">

      {/* Gallery */}
      <BusinessGallery images={business.images} />

      <div className="p-4">

        <h1 className="text-2xl font-bold">{business.name}</h1>

        <p className="text-sm text-gray-500 mt-1">
          {business.category}
        </p>

        <div className="flex items-center gap-2 mt-2 text-gray-600">
          <MapPin size={14} />
          {business.location}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star className="text-yellow-500" size={16} />
          <span>{business.rating}</span>
        </div>

        <p className="mt-4 text-gray-700">
          {business.description}
        </p>

        {/* Actions */}
        <div className="mt-6 space-y-2">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Call Business
          </button>

          <button className="w-full border py-2 rounded-lg">
            WhatsApp
          </button>

          <button className="w-full border py-2 rounded-lg text-red-600">
            Report Business
          </button>
        </div>

        {/* Reviews */}
        <div className="mt-8">
          <h2 className="font-semibold text-lg">Reviews</h2>

          <div className="mt-3 space-y-3">
            <ReviewCard />
            <ReviewCard />
          </div>

          {/* Write Review */}
          <textarea
            className="w-full border rounded-lg mt-4 p-2"
            placeholder="Write a review..."
          />

          <button className="mt-2 w-full bg-black text-white py-2 rounded-lg">
            Submit Review
          </button>
        </div>
      </div>
    </main>
  );
}