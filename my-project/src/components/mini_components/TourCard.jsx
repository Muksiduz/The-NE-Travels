const TourCard = ({ tour }) => {
  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md">
      {/* Image */}
      <img
        src={tour.image}
        alt={tour.title}
        className="h-48 w-full object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{tour.title}</h2>

        <p className="text-sm text-gray-600 mt-1">{tour.description}</p>

        <div className="mt-3 text-sm text-gray-700">
          <p>
            <span className="font-medium">Duration :</span> {tour.duration}
          </p>
          <p>
            <span className="font-medium">Price :</span>{" "}
            <span className="text-teal-600 font-semibold">
              ₹{tour.price.toLocaleString()}
            </span>
          </p>
        </div>

        <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
          Book This Tour
        </button>
      </div>
    </div>
  );
};

export default TourCard;
