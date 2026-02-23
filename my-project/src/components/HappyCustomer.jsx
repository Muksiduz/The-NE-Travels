import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "An unforgettable experience. The planning, locations, and support were perfect. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophia Williams",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Absolutely stunning destinations and seamless travel arrangements. Felt like a dream trip.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rahul Das",
    location: "Assam, India",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Professional service and breathtaking places. I’ll definitely travel again with them.",
    rating: 5,
  },
];

const HappyCustomers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".review-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-[#0B0F11] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#28E9E9]/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#28E9E9] tracking-widest mb-3">TESTIMONIALS</p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Our Happy Customers
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Hear from travelers who experienced unforgettable journeys with us.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                review-card
                relative p-6 rounded-2xl
                bg-white/5 backdrop-blur-lg
                border border-white/10
                hover:border-[#28E9E9]/40
                transition-all duration-500
                hover:-translate-y-2
              ">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-[#28E9E9]">
                    ★
                  </span>
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* User info */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">{review.name}</p>

                  <p className="text-gray-400 text-sm">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
