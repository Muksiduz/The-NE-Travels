import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID", // replace
        "YOUR_TEMPLATE_ID", // replace
        formRef.current,
        "YOUR_PUBLIC_KEY", // replace
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F11]/80 via-black/70 to-[#0B0F11]" />

      {/* glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#28E9E9]/10 blur-[200px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT INFO */}
        <div className="text-white">
          <p className="text-[#28E9E9] tracking-widest mb-4">CONTACT US</p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Plan Your Journey With Us
          </h2>

          <p className="text-gray-300 mb-8 max-w-md">
            Have questions or ready to book your Northeast adventure? Send us a
            message and our travel experts will contact you.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Assam, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉ contact@neway.com</p>
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="
            backdrop-blur-lg bg-white/5 border border-white/10
            rounded-2xl p-8 space-y-6
          ">
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Phone */}
          <input
            type="text"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-[#28E9E9]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-[#28E9E9] text-black font-semibold
              py-4 rounded-lg
              hover:scale-105 transition duration-300
              disabled:opacity-50
            ">
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="text-green-400">Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="text-red-400">Failed to send message. Try again.</p>
          )}
        </form>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0B0F11]" />
    </section>
  );
};

export default ContactSection;
