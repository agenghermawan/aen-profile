"use client";
import { useEffect, useRef } from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background (fixed) */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <Carousel indicators={false}>
          {[
            "/images/banner/hero-carousel-1.jpg",
            "/images/banner/hero-carousel-2.jpg",
            "/images/banner/hero-carousel-3.jpg",
          ].map((img, idx) => (
            <div key={idx} className="relative w-full h-full">
              <Image
                src={img}
                alt={`Carousel image ${idx + 1}`}
                className="object-cover"
                fill
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Navbar (above carousel) */}
      <Navbar />

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          PT Adimukti Energi Nusantara
        </h1>
        <p className="max-w-2xl text-gray-200 mb-6">
          Kami adalah mitra terpercaya di industri minyak dan gas, menyediakan
          layanan engineering, manpower, fabrication, dan material supply dengan
          integritas, profesionalisme, dan dedikasi penuh.
        </p>
        <Link
          href="/get-started"
          className="inline-block px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-full transition"
        >
          Get Started
        </Link>
      </div>

      {/* Dummy Scroll Section */}
      <div className="h-[200vh]" />
    </div>
  );
}
