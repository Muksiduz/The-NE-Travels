const Copyright = () => {
  return (
    <div className="relative border-t border-white/10 bg-transparent">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#28E9E9]/5 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} NE Way. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          {["Privacy", "Terms", "Cookies"].map((item) => (
            <span
              key={item}
              className="hover:text-[#28E9E9] cursor-pointer transition">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Copyright;
