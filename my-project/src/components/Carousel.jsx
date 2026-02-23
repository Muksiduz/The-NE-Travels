import { carouselData } from "../data/carouselData";

const Carousel = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {carouselData.map((item) => (
          <div
            key={item.id}
            className="relative h-64 rounded-xl overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
