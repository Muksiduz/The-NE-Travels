import TourCard from "../components/mini_components/TourCard";
import { packages } from "../data/packages";

const Tours = () => {
  return (
    <div className="bg-[#1b1b1d] py-20 px-2">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-bold text-[#28E9E9] tracking-wider">
          Our Packages
        </h2>
        <p className="mt-3 text-sm text-gray-400 max-w-xl mx-auto">
          Explore the most iconic and breathtaking destinations in North East
          India, handpicked for unforgettable experiences.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((tour) => (
          <div key={tour.id} className="group rounded-xl transition">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
