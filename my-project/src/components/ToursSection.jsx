import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    id: 1,
    title: "Kaziranga National Park",
    location: "Assam, India",
    duration: "3 Days",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    id: 2,
    title: "Meghalaya Waterfalls",
    location: "Meghalaya, India",
    duration: "4 Days",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 3,
    title: "Tawang Mountains",
    location: "Arunachal Pradesh",
    duration: "5 Days",
    price: "₹18,500",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
  {
    id: 4,
    title: "Majuli Island",
    location: "Assam, India",
    duration: "2 Days",
    price: "₹6,000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
];

const ToursSection = () => {
  const sectionRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".tour-card"),
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0B0F11] overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#28E9E9]/10 blur-[200px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#28E9E9] tracking-widest mb-3">POPULAR TOURS</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Explore Our Best Tours
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Carefully crafted experiences across Northeast India designed for
            unforgettable memories.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="
                tour-card
                group relative rounded-2xl overflow-hidden
                bg-white/5 backdrop-blur-md
                border border-white/10
                hover:border-[#28E9E9]/40
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
              ">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={tour.image}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-white">
                <p className="text-sm text-gray-400 mb-1">{tour.location}</p>

                <h3 className="text-lg font-semibold mb-3">{tour.title}</h3>

                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-gray-400">{tour.duration}</span>

                  <span className="text-[#28E9E9] font-semibold">
                    {tour.price}
                  </span>
                </div>

                {/* Button */}
                <button
                  onClick={() => navigate("/contact")}
                  className="
                  w-full py-2 rounded-lg
                  bg-[#28E9E9] text-black font-medium
                  hover:bg-[#1fcfcf]
                  transition duration-300 cursor-pointer
                ">
                  Book Now
                </button>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
