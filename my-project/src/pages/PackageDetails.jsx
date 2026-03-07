import { useParams } from "react-router-dom";
import { packages } from "../data/packages";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

const PackageDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const pkg = packages.find((p) => p.id === parseInt(id));

  if (!pkg) return <div className="text-white p-40">Package not found</div>;

  return (
    <div className="bg-[#0B0F11] text-white">
      {/* HERO */}
      <section className="relative h-[70vh]">
        <img src={pkg.image} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-16 left-10">
          <h1 className="text-5xl font-bold">{pkg.title}</h1>
          <p className="text-gray-300">{pkg.location}</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3}>
          {pkg.gallery.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} className="rounded-xl h-64 w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* MAIN DETAILS */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 pb-20">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6">Tour Overview</h2>

          <p className="text-gray-300 mb-10">{pkg.description}</p>

          {/* VIDEO */}
          <div className="mb-14">
            <h3 className="text-2xl font-semibold mb-4">Destination Video</h3>

            <iframe
              src={pkg.video}
              className="w-full h-[400px] rounded-xl"
              allowFullScreen
            />
          </div>

          {/* HIGHLIGHTS */}
          <h3 className="text-2xl font-semibold mb-4">Highlights</h3>

          <ul className="space-y-3 mb-10">
            {pkg.highlights.map((h, i) => (
              <li key={i}>• {h}</li>
            ))}
          </ul>

          {/* ITINERARY */}
          <h3 className="text-2xl font-semibold mb-6">Itinerary</h3>

          <div className="space-y-6">
            {pkg.itinerary.map((day, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h4 className="font-semibold">
                  Day {day.day} — {day.title}
                </h4>

                <p className="text-gray-400 mt-2">{day.description}</p>
              </div>
            ))}
          </div>

          {/* MAP */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Location</h3>

            <iframe
              src={pkg.mapEmbed}
              className="w-full h-[350px] rounded-xl border-0"
            />
          </div>

          {/* REVIEWS */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Traveler Reviews</h3>

            <div className="space-y-6">
              {pkg.reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">{r.name}</h4>
                    <span className="text-[#28E9E9]">
                      {"★".repeat(r.rating)}
                    </span>
                  </div>

                  <p className="text-gray-400">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <div>
          <div className="sticky top-28 bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">₹{pkg.price}</h3>

            <p className="text-gray-400 mb-8">{pkg.duration}</p>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate("/contact");
              }}
              className="w-full py-4 bg-[#28E9E9] text-black rounded-lg font-semibold mb-4">
              Book Now
            </button>

            {/* <a
              href={pkg.pdf}
              download
              className="block text-center border border-white/20 py-3 rounded-lg hover:border-[#28E9E9]">
              Download Itinerary
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
