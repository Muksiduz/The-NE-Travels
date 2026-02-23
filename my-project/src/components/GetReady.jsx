import { getReadyData } from "../data/footerData";

const GetReady = () => {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url(${getReadyData.backgroundImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B0F11]/60" />
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">{getReadyData.title}</h2>

        <p className="mt-4 text-sm md:text-base text-gray-200">
          {getReadyData.description}
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-teal-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-teal-300 transition">
            {getReadyData.primaryBtn}
          </button>

          <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-400 transition">
            {getReadyData.secondaryBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetReady;
