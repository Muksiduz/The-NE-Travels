import { packages } from "../data/packages";

const Packages = () => {
  return (
    <section className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-16 text-white">
          All Travel Packages
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="
                group relative rounded-2xl overflow-hidden
                bg-white/5 border border-white/10
                hover:border-[#28E9E9]/40
                transition duration-500
                hover:-translate-y-2
              ">
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Duration */}
                <p className="text-[#28E9E9] text-sm mb-2">{pkg.duration}</p>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {pkg.description}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    ₹{pkg.price.toLocaleString()}
                  </span>

                  <button
                    className="
                      bg-[#28E9E9] text-black px-4 py-2 rounded-full
                      text-sm font-medium
                      hover:scale-105
                      transition
                    ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
