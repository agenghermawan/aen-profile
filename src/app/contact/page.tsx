import React from "react";
import Navbar from "../atoms/home/navbar";
import { BiMapPin, BiPhone } from "react-icons/bi";
import { RiMvAiLine } from "react-icons/ri";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="relative bg-[url('/images/banner/footer-bg.jpg')] bg-center bg-cover bg-no-repeat h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-400 font-semibold">Home</span> / Contact
          </p>
        </div>
      </div>

      {/* Contact Info & Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Info Boxes */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Address */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-2">
                <BiMapPin className="text-yellow-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kantor Taman E33 Unit D3A Lantai 3<br />
                Jl. Dr. Ide Anak Agung Gde Agung<br />
                Lot 8.6-8.7, Kawasan Mega Kuningan<br />
                Jakarta Selatan, DKI Jakarta
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-2">
                <BiPhone className="text-yellow-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-sm text-gray-600">0812-1248-1932</p>
            </div>

            {/* Email */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="flex justify-center mb-2">
                <RiMvAiLine className="text-yellow-400 w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-1">Email Us</h4>
              <p className="text-sm text-gray-600">info@adimukti-en.co.id</p>
            </div>
          </div>

          {/* Map & Contact Form */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Map */}
            <div className="w-full h-80 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.365423715824!2d106.8268310758692!3d-6.215151793776929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d840bf3c21%3A0xa64873a12b2543ac!2sKantor%20Taman%20E33!5e0!3m2!1sid!2sid!4v1713876253275!5m2!1sid!2sid"
                className="w-full h-full rounded-md border-0"
                loading="lazy"
                allowFullScreen
                title="AEN Office Location"
              ></iframe>
            </div>

            {/* Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  rows={4}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-400 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
