import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">TRAVEL</h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white text-base font-light tracking-widest relative">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.path}>
              {({ isActive }) => (
                <li className="relative cursor-pointer hover:text-[#28E9E9] transition hover:font-semibold">
                  {link.name}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#28E9E9]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </li>
              )}
            </NavLink>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-[#28E9E9] cursor-pointer text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-300 transition">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
