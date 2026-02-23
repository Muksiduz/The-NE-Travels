const AboutUs = () => {
  return (
    <div className="bg-transparent text-white">
      {/* HERO */}
      <section className="relative py-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/80 via-black/70 to-[#0B0F11]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#28E9E9] tracking-widest mb-4">ABOUT NE WAY</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover Northeast India Like Never Before
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            We create unforgettable journeys through the untouched beauty,
            culture, and adventure of Northeast India.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2070&auto=format&fit=crop"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <p className="text-[#28E9E9] mb-4">OUR STORY</p>

            <h2 className="text-4xl font-bold mb-6">
              Born From Passion For Exploration
            </h2>

            <p className="text-gray-300 mb-4">
              NE Way was founded with a mission to showcase the hidden beauty of
              Northeast India to travelers around the world.
            </p>

            <p className="text-gray-400">
              Our team consists of passionate explorers, locals, and travel
              experts who understand every corner of this region.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#28E9E9]">
              Our Mission
            </h3>

            <p className="text-gray-300">
              To provide authentic, safe, and unforgettable travel experiences
              while supporting local communities and preserving nature.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-[#28E9E9]">
              Our Vision
            </h3>

            <p className="text-gray-300">
              To become the leading travel company showcasing Northeast India
              globally through meaningful journeys.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold mb-3">Local Expertise</h4>

              <p className="text-gray-400">
                Our team knows Northeast India better than anyone.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold mb-3">
                Authentic Experiences
              </h4>

              <p className="text-gray-400">
                We provide real cultural and natural experiences.
              </p>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h4 className="text-xl font-semibold mb-3">Safe & Trusted</h4>

              <p className="text-gray-400">
                Your safety and comfort is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-[#28E9E9]">500+</h3>
            <p className="text-gray-400">Trips Completed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#28E9E9]">50+</h3>
            <p className="text-gray-400">Destinations</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#28E9E9]">300+</h3>
            <p className="text-gray-400">Happy Travelers</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-[#28E9E9]">5★</h3>
            <p className="text-gray-400">Average Rating</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Journey Today</h2>

        <button className="bg-[#28E9E9] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Explore Packages
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
