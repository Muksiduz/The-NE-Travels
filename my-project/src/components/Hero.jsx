import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const bgRef = useRef(null);
  const neWayRef = useRef(null);

  useEffect(() => {
    // Background slow zoom
    gsap.fromTo(
      bgRef.current,
      { scale: 1.25 },
      {
        scale: 1,
        duration: 8,
        ease: "power2.out",
      },
    );

    // ONLY "NE WAY" rises from behind mountain
    gsap.fromTo(
      neWayRef.current,
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
        delay: 0.5,
      },
    );
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/mountain-bg.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text container */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pl-18 mb-30">
        <h1 className="text-6xl md:text-[150px] font-bold text-white flex">
          {/* NE WAY rises */}
          <span ref={neWayRef} className="inline-block">
            THE NE WAY
          </span>
        </h1>
      </div>

      {/* Mountain foreground mask */}
      <img
        src="/mountain-foreground.png"
        alt="mountain foreground"
        className="absolute bottom-[-20%] scale-[1.2] left-0 w-full z-30 pointer-events-none select-none"
      />
    </section>
  );
};

export default Hero;
