import React from "react";
import Navbar from "../atoms/home/navbar";
import { TabItem, Tabs } from "flowbite-react";

export default function ProjectPage() {
  return (
    <div>
      <Navbar />

      <div className="relative bg-[url('/images/banner/footer-bg.jpg')] bg-center bg-cover bg-no-repeat h-[300px] flex items-center justify-center">
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0" />

        {/* Konten teks */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Project</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-400 font-semibold">Home</span> /
            Project
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-16 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Our Projects
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Berikut adalah beberapa proyek yang telah kami selesaikan bersama
          berbagai klien dari sektor industri migas dan konstruksi.
        </p>

        <Tabs
          aria-label="Project Tabs"
          variant="underline"
          className="mt-8 border-b-0 text-center justify-center"
        >
          {/* All Projects */}
          <TabItem active title="All">
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                image="/images/banner/hero-carousel-1.jpg"
                title="Provision of Casing Pipe"
                client="PT Molteksindo Abadi Nusantara"

              />
              <ProjectCard
                image="/images/banner/hero-carousel-2.jpg"
                title="Housing Construction - Cinere Cluster"
                client="PT Desatu Bangun Cipta"

              />
              <ProjectCard
                image="/images/banner/hero-carousel-3.jpg"
                title="Project Management Team Services"
                client="PT Pema Global Energi"

              />
            </div>
          </TabItem>

          {/* Construction */}
          <TabItem title="Construction">
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                image="/images/banner/hero-carousel-1.jpg"
                title="Land Clearing & 15 Housing Units"
                client="PT Ashilla Belti Kontruksi"

              />
              <ProjectCard
                image="/images/banner/hero-carousel-2.jpg"
                title="Cinere Cluster Housing"
                client="PT Desatu Bangun Cipta"

              />
            </div>
          </TabItem>

          {/* Supply Services */}
          <TabItem title="Supply">
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                image="/images/banner/hero-carousel-1.jpg"
                title="Provision of OCTG"
                client="PT Molteksindo Abadi Nusantara"

              />
              <ProjectCard
                image="/images/banner/hero-carousel-3.jpg"
                title="Oli Exxon Pegasus 805 SPG II"
                client="PT Wira Cipta Perkasa"

              />
            </div>
          </TabItem>

          {/* Maintenance & Support */}
          <TabItem title="Maintenance">
            <div className="grid md:grid-cols-3 gap-6">
              <ProjectCard
                image="/images/banner/hero-carousel-3.jpg"
                title="General Support & Maintenance"
                client="PT Wira Cipta Perkasa"

              />
              <ProjectCard
                image="/images/banner/hero-carousel-1.jpg"
                title="Support for HSE Management"
                client="PT Wira Cipta Perkasa"

              />
            </div>
          </TabItem>
        </Tabs>
      </section>
    </div>
  );
}

type ProjectCardProps = {
  image: string;
  title: string;
  client: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, client }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center text-white text-center p-4">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm mt-1">Client: {client}</p>
        </div>
      </div>
    </div>
  );
};
