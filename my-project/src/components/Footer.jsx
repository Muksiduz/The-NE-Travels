import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const whatsappNumber = "919876543210"; // change this
  const email = "contact@neway.com";
  const phone = "+919876543210";

  return (
    <footer className="relative pt-24 pb-12 bg-transparent overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#0B0F11] to-transparent pointer-events-none" />

      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#28E9E9]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">NE Way</h3>

            <p className="text-gray-400 leading-relaxed">
              Discover the beauty of Northeast India through curated journeys
              and unforgettable experiences.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon">
                <FaInstagram />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon">
                <FaFacebook />
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon">
                <FaTwitter />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon">
                <FaYoutube />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/packages" className="hover:text-[#28E9E9]">
                  Tours
                </Link>
              </li>

              {/* <li>
                <Link to="/packages" className="hover:text-[#28E9E9]">
                  Destinations
                </Link>
              </li> */}

              <li>
                <Link to="/about" className="hover:text-[#28E9E9]">
                  Experiences
                </Link>
              </li>

              {/* <li>
                <Link to="/contact" className="hover:text-[#28E9E9]">
                  Gallery
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-[#28E9E9]">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-[#28E9E9]">
                  Contact
                </Link>
              </li>

              {/* <li>
                <a href="#" className="hover:text-[#28E9E9]">
                  Careers
                </a>
              </li> */}

              {/* <li>
                <a href="#" className="hover:text-[#28E9E9]">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-gray-400">
              <li>Assam, India</li>

              <li>
                <a href={`tel:${phone}`} className="hover:text-[#28E9E9]">
                  {phone}
                </a>
              </li>

              <li>
                <a href={`mailto:${email}`} className="hover:text-[#28E9E9]">
                  {email}
                </a>
              </li>

              <li>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  className="hover:text-[#28E9E9]">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Icon shared style */}
      <style>
        {`
          .icon {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 999px;
            cursor: pointer;
            transition: all 0.3s;
            color: #ccc;
          }

          .icon:hover {
            border-color: #28E9E9;
            color: #28E9E9;
            transform: scale(1.1);
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
