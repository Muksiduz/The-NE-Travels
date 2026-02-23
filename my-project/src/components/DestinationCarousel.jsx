import { useState, useRef, useEffect } from "react";
import { packages } from "../data/packages";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import { useNavigate } from "react-router-dom";

const DestinationCarousel = () => {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [bgImage, setBgImage] = useState(packages[0].image);

  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);

  const navigate = useNavigate();

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const priceRef = useRef(null);
  const buttonRef = useRef(null);

  // Background crossfade animation
  useEffect(() => {
    if (!bgTopRef.current || !bgBottomRef.current) return;

    // Set bottom layer to new image
    bgBottomRef.current.style.backgroundImage = `url(${selectedPackage.image})`;

    const tl = gsap.timeline();

    tl.to(bgTopRef.current, {
      opacity: 0,
      duration: 1.6,
      ease: "power2.inOut",
    }).add(() => {
      // After fade, update top image and reset opacity
      setBgImage(selectedPackage.image);
      gsap.set(bgTopRef.current, { opacity: 1 });
    });

    // Cinematic content animation
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 60, force3D: true },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      },
    )

      .fromTo(
        descRef.current,
        { opacity: 0, y: 50, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.9",
      )

      .fromTo(
        priceRef.current,
        { opacity: 0, y: 40, force3D: true },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
        },
        "-=0.9",
      )

      // BUTTON separate animation (IMPORTANT)
      .fromTo(
        buttonRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.96,
          force3D: true,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          clearProps: "transform",
        },
        "-=0.8",
      );
  }, [selectedPackage]);

  return (
    <section className="relative min-h-screen text-white  flex items-center overflow-hidden bg-[#0B0F11]">
      {/* Bottom background layer */}
      <div ref={bgBottomRef} className="absolute inset-0 bg-cover bg-center" />

      {/* Top background layer (crossfades) */}
      <div
        ref={bgTopRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute top-0 w-full h-40 bg-gradient-to-t from-transparent to-[#232c31]" />

      {/* Content container */}
      <div className="relative z-10 w-full pl-14 max-w-7xl mx-auto flex items-center">
        {/* LEFT CONTENT */}
        <div className="w-1/2 pr-12">
          <p className="text-gray-400 mb-2">{selectedPackage.duration}</p>

          <h1
            ref={titleRef}
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {selectedPackage.title}
          </h1>

          <p ref={descRef} className="text-gray-300 max-w-md mb-6">
            {selectedPackage.description}
          </p>

          <p ref={priceRef} className="text-2xl font-semibold mb-8">
            ₹{selectedPackage.price}
          </p>

          <button
            ref={buttonRef}
            onClick={() => navigate("/contact")}
            className="bg-[#28E9E9] text-black px-7 py-3 rounded-lg font-semibold 
transition-transform duration-500">
            Book Now
          </button>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="w-1/2 flex justify-center pt-16">
          <Swiper
            modules={[EffectCoverflow, Navigation]}
            effect="coverflow"
            centeredSlides
            slidesPerView={3}
            spaceBetween={20}
            speed={1600} // slower, smoother
            grabCursor
            navigation
            onSlideChange={(swiper) =>
              setSelectedPackage(packages[swiper.activeIndex])
            }
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2.2,
              slideShadows: false,
            }}
            className="w-[480px]">
            {packages.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <div
                  onClick={() => setSelectedPackage(pkg)}
                  className={`
                    relative h-60 w-50 rounded-xl overflow-hidden cursor-pointer
                    transition-all duration-700 ease-out
                    ${
                      selectedPackage.id === pkg.id
                        ? "scale-100 opacity-100"
                        : "scale-85 opacity-40"
                    }
                  `}>
                  <img src={pkg.image} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <p className="text-xs text-gray-300">{pkg.duration}</p>
                    <h3 className="text-sm font-semibold">{pkg.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Smooth bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B0F11]" />
    </section>
  );
};

export default DestinationCarousel;
