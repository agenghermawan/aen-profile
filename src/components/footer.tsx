import { Button } from "flowbite-react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function FooterComponents() {
  return (
    <footer
      className="relative text-white pt-12 pb-8"
      style={{
        backgroundImage: "url('/images/banner/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 w-10/12 mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Adimukti Energi Nusantara</h2>
          <p className="mb-2">
            Kantor Taman E33 Unit D3A Lantai 3<br />
            Jl. Dr Ide Anak Agung Gde Agung Lot 8.6-8.7<br />
            Jakarta Selatan, DKI Jakarta
          </p>
          <p className="mb-2 flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" /> 0812-1248-1932
          </p>
          <p className="mb-4 flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> info@adimukti-en.co.id
          </p>
          <div className="flex gap-2">
            <Button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded hover:bg-yellow-500">
              <FaFacebookF />
            </Button>
            <Button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded hover:bg-yellow-500">
              <FaInstagram />
            </Button>
            <Button className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded hover:bg-yellow-500">
              <FaLinkedinIn />
            </Button>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Engineering & Project</li>
            <li>Manpower Supply</li>
            <li>Fabrication</li>
            <li>Material Supply</li>
            <li>O&M Services</li>
          </ul>
        </div>

        {/* Company Values */}
        <div>
          <h3 className="text-lg font-bold mb-4">Company Values</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Integrity</li>
            <li>Responsiveness</li>
            <li>Accountability</li>
            <li>Professionalism</li>
            <li>Collaboration</li>
          </ul>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Access</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Company Profile</li>
            <li>Career</li>
            <li>News & Updates</li>
            <li>Client Login</li>
            <li>Downloads</li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 border-t border-gray-500 mt-10 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} <strong>PT Adimukti Energi Nusantara</strong>. All rights reserved.
        </p>
        <p className="mt-2">
          Designed & Developed by{" "}
          <a className="text-yellow-400" href="#">
            Your Company
          </a>
        </p>
      </div>
    </footer>
  );
}
