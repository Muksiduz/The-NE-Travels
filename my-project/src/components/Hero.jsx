import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const bgRef = useRef(null);
  const neWayRef = useRef(null);
  const mobileDescRef = useRef(null);
  const mobileBtnRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // Background slow cinematic zoom
    gsap.fromTo(
      bgRef.current,
      { scale: 1.15 },
      {
        scale: 1,
        duration: 8,
        ease: "power2.out",
      },
    );

    // Timeline for cinematic sequence
    const tl = gsap.timeline({ delay: 0.5 });

    // Main title animation
    tl.fromTo(
      neWayRef.current,
      {
        y: isMobile ? 120 : 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        ease: "power4.out",
      },
    );

    // Mobile-only description + button animation
    if (isMobile) {
      tl.fromTo(
        mobileDescRef.current,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=2",
      )

        .fromTo(
          mobileBtnRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=1.2",
        );
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center z-0 will-change-transform"
        style={{
          backgroundImage: "url('/mountain-bg.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Title */}
      <div className="absolute inset-0 bottom-60 md:bottom-36 flex items-center justify-center z-20 px-4">
        <h1
          ref={neWayRef}
          className="
            text-white font-bold text-center
            text-4xl
            sm:text-6xl
            md:text-8xl
            lg:text-[120px]
            xl:text-[150px]
            leading-tight
            will-change-transform
          ">
          THE NE WAY
        </h1>
      </div>

      {/* Mountain foreground */}
      <img
        src="/mountain-foreground.png"
        alt="mountain foreground"
        className="
          absolute left-1/2 -translate-x-1/2  z-30
          pointer-events-none select-none

          bottom-[6%]
          sm:bottom-[-6%]
          md:bottom-[-10%]
          lg:bottom-[-15%]

          w-[100%]
          sm:w-[140%]
          md:w-[120%]
          lg:w-full

          scale-[2]
          sm:scale-[1.2]
          md:scale-[1.15]
          lg:scale-[1.1]

          max-w-none
          will-change-transform
        "
      />

      {/* Mobile description + button ONLY */}
      <div className="lg:hidden absolute bottom-94 left-0 right-0 px-6 z-40 text-center">
        {/* Description */}
        <p
          ref={mobileDescRef}
          className="
            text-gray-300 text-sm leading-relaxed
            max-w-xs mx-auto mb-5
            will-change-transform
          ">
          Discover the untouched beauty of Northeast India. Experience
          breathtaking mountains, hidden valleys, and unforgettable journeys
          crafted for explorers.
        </p>

        {/* Button */}
        <button
          ref={mobileBtnRef}
          className="
            bg-[#28E9E9]
            text-black
            px-6 py-3
            rounded-full
            font-semibold
            text-sm

            hover:scale-105
            active:scale-95

            transition-all duration-300

            shadow-[0_0_20px_rgba(40,233,233,0.4)]

            will-change-transform
          ">
          Explore Packages
        </button>
      </div>

      {/* Bottom fade transition */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0B0F11] z-40" />
    </section>
  );
};

export default Hero;
