"use client";
import Link from "next/link";
import React from "react";
import { Carousel, TabItem, Tabs } from "flowbite-react";
import Image from "next/image";

import { FaTools, FaStar, FaSun, FaRegSun } from "react-icons/fa";
import FeatureItem from "@/app/atoms/home/feature_item";

const HeroWithNavbar = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="h-screen w-full">
        <Carousel>
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
                layout="fill" // Use layout="fill" for responsive images
                priority // Optional: Load this image first
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-30">
        <nav className="flex items-center justify-between px-6 lg:px-20 py-4 text-white">
          <h1 className="text-2xl font-bold">
            UpConstruction<span className="text-yellow-400">.</span>
          </h1>
          <ul className="hidden md:flex gap-6 font-medium">
            {[
              "home",
              "about",
              "services",
              "projects",
              "contact",
            ].map((page) => (
              <li key={page}>
                <Link
                  href={`/${page === "home" ? "" : page}`}
                  className="hover:text-yellow-400"
                >
                  {page.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to</h2>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-yellow-400">
          UpConstruction
        </h1>
        <p className="max-w-2xl text-gray-200 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          href="/get-started"
          className="inline-block px-6 py-3 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold rounded-full transition"
        >
          Get Started
        </Link>
      </div>

      {/* Construction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-2">
            <span className="border-b-4 border-yellow-400 px-2">
              Constructions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          <div className="flex border overflow-hidden">
            <img
              src="/images/banner/hero-carousel-1.jpg"
              alt="Project 1"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Eligendi omnis sunt veritatis.
              </h3>
              <p className="text-gray-600 text-sm">
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi
                voluptatem placeat...
              </p>
            </div>
          </div>

          <div className="flex border overflow-hidden">
            <img
              src="/images/banner/hero-carousel-2.jpg"
              alt="Project 2"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Possimus ut sed velit assumenda
              </h3>
              <p className="text-gray-600 text-sm">
                Sunt deserunt maiores voluptatem autem est rerum perferendis
                rerum blanditiis...
              </p>
            </div>
          </div>

          <div className="flex border overflow-hidden">
            <img
              src="/images/banner/hero-carousel-3.jpg"
              alt="Project 3"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Error beatae dolor inventore aut
              </h3>
              <p className="text-gray-600 text-sm">
                Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim
                molestiae facilis...
              </p>
            </div>
          </div>

          <div className="flex border overflow-hidden">
            <img
              src="/images/banner/hero-carousel-1.jpg"
              alt="Project 4"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Expedita voluptas ut ut nesciunt
              </h3>
              <p className="text-gray-600 text-sm">
                Aut est quidem doloremque voluptatem magnam quis excepturi vero
                quia...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 inline-block relative mb-2">
            <span className="border-b-4 border-yellow-400 px-2">Services</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-1.svg" className="w-12 h-12" alt="Icon 1" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Nesciunt Mete
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-2.svg" className="w-12 h-12" alt="Icon 2" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Eosle Commodi
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
              Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-3.svg" className="w-12 h-12" alt="Icon 3" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ledo Markt
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
              ea aut. Vel qui id voluptas adipisci eos earum corrupti.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-4.svg" className="w-12 h-12" alt="Icon 4" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Asperiores Commodit
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Non et temporibus minus omnis sed dolor esse consequatur.
              Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-5.svg" className="w-12 h-12" alt="Icon 5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Velit Doloremque
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
              ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <img src="/icons/icon-6.svg" className="w-12 h-12" alt="Icon 6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Dolori Architecto
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
              non et debitis iure. Corrupti recusandae ducimus enim.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/images/construction-workers.png"
              alt="Construction workers climbing"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Enim quis est voluptatibus aliquid consequatur fugiat
            </h2>
            <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 mb-10">
              Esse voluptas cumque vel exercitationem. Reiciendis est hic
              accusamus. Non ipsam et sed minima temporibus laudantium. Soluta
              voluptate sed facere corporis dolores excepturi
            </p>

            {/* Feature Items */}
            <div className="space-y-6">
              <FeatureItem
                icon={<FaTools className="text-yellow-500 text-xl" />}
                title="Lorem Ipsum"
                desc="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
              />
              <FeatureItem
                icon={<FaStar className="text-yellow-500 text-xl" />}
                title="Nemo Enim"
                desc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
              />
              <FeatureItem
                icon={<FaSun className="text-yellow-500 text-xl" />}
                title="Dine Pad"
                desc="Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis"
              />
              <FeatureItem
                icon={<FaRegSun className="text-yellow-500 text-xl" />}
                title="Tride clov"
                desc="Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Projects{" "}
        </h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <Tabs aria-label="Tabs with icons" variant="underline" className="mt-8 border-b-0 text-center ">
          <TabItem active title="All">
            <div className="grid md:grid-cols-3 gap-4">
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
              <img src="/images/banner/hero-carousel-1.jpg" alt="Project 1" className="w-full h-[400px] object-cover" />
            </div>
          </TabItem>
          <TabItem title="Remodeling">
            <p className="">Content 2</p>
          </TabItem>
          <TabItem title="Construction">
            <p className="">Content 3</p>
          </TabItem>
          <TabItem title="Repairs">
            <p className="">Content 4</p>
          </TabItem>
          <TabItem title="Design">
            <p className="">Content 5</p>
          </TabItem>
        </Tabs>
      </section>
    </div>
  );
};

export default HeroWithNavbar;
