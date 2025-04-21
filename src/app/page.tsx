"use client";
import Banner from "./atoms/home/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromGroundWater,
  faCircleNotch,
  faCompassDrafting,
  faHospitalUser,
  faMountainCity,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons"; // versi Free

import { TabItem, Tabs } from "flowbite-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionRefs = useRef<HTMLElement[]>([]); // ✅ kasih tipe array of HTMLElement
  sectionRefs.current = [];

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    const animations = [
      { y: 100, opacity: 0 }, // fade up
      { x: -100, opacity: 0 }, // slide from left
      { x: 100, opacity: 0 }, // slide from right
      { scale: 0.8, opacity: 0 }, // zoom in
      { y: 50, opacity: 0, filter: "blur(10px)" }, // blur + fade
    ];

    sectionRefs.current.forEach((ref, index) => {
      const config = {
        scrollTrigger: {
          trigger: ref,
          start: "top 80%",
          toggleActions: "play reverse play reverse", // or "restart pause resume reset"
        },
        duration: 1,
        ease: "power3.out",
        ...animations[index],
      };

      gsap.from(ref, config);
    });
  }, []);
  return (
    <div>
      <Banner />

      <section className="py-16 bg-white" ref={addToRefs}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-2">
            <span className="border-b-4 border-yellow-400 px-2">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            PT Adimukti Energi Nusantara menyediakan solusi terpadu dalam bidang
            rekayasa teknik, pengadaan tenaga kerja, fabrikasi, dan material
            berkualitas untuk industri minyak & gas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          <div className="flex border border-[#364d59]/20 overflow-hidden">
            <img
              src="/images/banner/hero-carousel-1.jpg"
              alt="Project 1"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Engineering & Project Management
              </h3>
              <p className="text-gray-600 text-sm">
                Menyediakan dukungan teknik inovatif dari studi kelayakan hingga
                desain rinci, konstruksi, commissioning, dan operasi untuk
                proyek industri energi.
              </p>
            </div>
          </div>

          <div className="flex border border-[#364d59]/20 overflow-hidden">
            <img
              src="/images/banner/hero-carousel-2.jpg"
              alt="Project 2"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Manpower Supply
              </h3>
              <p className="text-gray-600 text-sm">
                Menyediakan SDM lokal maupun ekspatriat untuk fasilitas onshore
                dan offshore, baik penempatan kontrak maupun permanen sesuai
                kebutuhan klien.
              </p>
            </div>
          </div>

          <div className="flex border border-[#364d59]/20 overflow-hidden">
            <img
              src="/images/banner/hero-carousel-3.jpg"
              alt="Project 3"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Fabrication Services
              </h3>
              <p className="text-gray-600 text-sm">
                Ahli dalam pembuatan pipa, tangki penyimpanan, dan bejana tekan
                untuk industri migas, air, dan pembangkit listrik dengan
                pengalaman global.
              </p>
            </div>
          </div>

          <div className="flex border border-[#364d59]/20 overflow-hidden">
            <img
              src="/images/banner/hero-carousel-1.jpg"
              alt="Project 4"
              className="w-[180px] object-cover h-[200px]"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                Materials Supplied
              </h3>
              <p className="text-gray-600 text-sm">
                Menyediakan berbagai material, sparepart, pelumas, dan kebutuhan
                konstruksi lainnya yang sesuai standar untuk mendukung
                kelancaran operasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16" ref={addToRefs}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 inline-block relative mb-2">
            <span className="border-b-4 border-yellow-400 px-2">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Menyediakan solusi teknik dan layanan profesional untuk mendukung
            kebutuhan proyek industri minyak dan gas, dari awal hingga pasca
            implementasi.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Engineering & Project Management */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faCompassDrafting}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Engineering & Project Management
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Dukungan teknis mulai dari studi kelayakan hingga commissioning
              dan operasi. Menyediakan engineer berpengalaman untuk setiap tahap
              proyek.
            </p>
          </div>

          {/* Manpower Supply */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faHospitalUser}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manpower Supply
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Penyediaan tenaga kerja lokal maupun ekspatriat untuk fasilitas
              onshore dan offshore, baik kontrak maupun permanen sesuai
              kebutuhan proyek.
            </p>
          </div>

          {/* Fabrication Services */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faTrowelBricks}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Fabrication Services
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Layanan fabrikasi tangki, vessel, dan pipa dengan standar tinggi
              untuk industri minyak dan gas, air bersih, serta pembangkit
              tenaga.
            </p>
          </div>

          {/* Materials Supplied */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Materials Supplied
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Pengadaan suku cadang, pelumas, dan material konstruksi
              berkualitas tinggi untuk menunjang keberhasilan dan keberlanjutan
              proyek.
            </p>
          </div>

          {/* Operation & Maintenance */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faMountainCity}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Operation & Maintenance
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Menyediakan layanan O&M yang terintegrasi untuk fasilitas energi,
              dengan fokus pada efisiensi dan kelangsungan operasional.
            </p>
          </div>

          {/* HSE Support Services */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faArrowUpFromGroundWater}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              HSE Support Services
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Dukungan layanan keselamatan, kesehatan kerja, dan lingkungan yang
              terstandarisasi, memastikan kelangsungan proyek sesuai regulasi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-white" ref={addToRefs}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/images/company-about.jpg" // Ganti dengan foto asli perusahaan kalau ada
              alt="PT AEN team at work"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Bergerak Maju dengan Integritas dan Kepercayaan
            </h2>
            <div className="h-1 w-16 bg-yellow-400 mb-6"></div>
            <p className="text-gray-600 mb-10">
              Di PT Adimukti Energi Nusantara, setiap tantangan adalah peluang.
              Kami hadir untuk memberikan solusi menyeluruh di industri migas,
              dari perencanaan hingga eksekusi, dengan semangat kolaboratif dan
              profesionalisme tinggi.
            </p>

            {/* Feature Items */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-yellow-500 text-2xl mt-1">
                  <i className="fas fa-tools"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Teknologi & Engineering
                  </h4>
                  <p className="text-sm text-gray-600">
                    Dukungan teknis menyeluruh dari desain hingga operasional,
                    disesuaikan dengan kebutuhan spesifik industri minyak dan
                    gas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-500 text-2xl mt-1">
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Kualitas & Integritas
                  </h4>
                  <p className="text-sm text-gray-600">
                    Menjunjung tinggi standar etika dan kualitas dalam setiap
                    langkah proyek. Kepercayaan klien adalah prioritas utama
                    kami.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-500 text-2xl mt-1">
                  <i className="fas fa-sun"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Responsif & Adaptif
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cepat merespons dinamika pasar, regulasi, serta kebutuhan
                    klien dengan solusi yang fleksibel dan tepat sasaran.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-yellow-500 text-2xl mt-1">
                  <i className="far fa-sun"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Tim Profesional
                  </h4>
                  <p className="text-sm text-gray-600">
                    Didukung oleh SDM berpengalaman dan berdedikasi tinggi, baik
                    lokal maupun ekspatriat, untuk hasil yang optimal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-white" ref={addToRefs}>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
          Our Services
        </h2>
        <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
          PT Adimukti Energi Nusantara menyediakan layanan menyeluruh di
          industri migas mulai dari rekayasa teknik hingga pengadaan material
          dan perawatan operasional.
        </p>

        <Tabs
          aria-label="Service Tabs"
          variant="underline"
          className="mb-10 justify-center text-center border-b-0"
        >
          {/* Engineering & Project Management */}
          <TabItem active title="Engineering">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Engineering & Project Management
                </h3>
                <hr className="w-16 border-yellow-400 mb-4" />
                <p className="italic text-gray-500 mb-6">
                  Dukungan rekayasa menyeluruh dari studi awal, desain rinci,
                  konstruksi, hingga commissioning dan pemeliharaan.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Construction
                    & QA/QC Engineers
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Drilling
                    Contract & SHE Engineers
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> PPC,
                    Operation & Maintenance Support
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/banner/hero-carousel-1.jpg"
                  alt="Engineering Team"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabItem>

          {/* Manpower Supply */}
          <TabItem title="Manpower">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Manpower Supply
                </h3>
                <hr className="w-16 border-yellow-400 mb-4" />
                <p className="italic text-gray-500 mb-6">
                  Penyediaan SDM lokal dan ekspatriat, kontrak maupun permanen
                  untuk mendukung proyek migas baik onshore maupun offshore.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Penempatan
                    sesuai kebutuhan klien
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Profesional
                    bersertifikat dan berpengalaman
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Support
                    administrasi & compliance
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/banner/hero-carousel-2.jpg"
                  alt="Manpower"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabItem>

          {/* Fabrication Services */}
          <TabItem title="Fabrication">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Fabrication Services
                </h3>
                <hr className="w-16 border-yellow-400 mb-4" />
                <p className="italic text-gray-500 mb-6">
                  Solusi fabrikasi pipa, tangki, dan vessel untuk industri
                  minyak & gas, air bersih, dan pembangkit tenaga listrik.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Pengelasan &
                    perakitan struktur baja
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Penyedia
                    tangki penyimpanan skala besar
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Dukungan
                    desain dan instalasi
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/banner/hero-carousel-3.jpg"
                  alt="Fabrication"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabItem>

          {/* Materials Supplied */}
          <TabItem title="Materials">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Materials Supplied
                </h3>
                <hr className="w-16 border-yellow-400 mb-4" />
                <p className="italic text-gray-500 mb-6">
                  Pengadaan material, sparepart, dan pelumas berkualitas tinggi
                  yang sesuai standar industri migas.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Pelumas
                    industri & suku cadang
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Material
                    konstruksi & logistik proyek
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Dukungan
                    pengadaan cepat & efisien
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/banner/hero-carousel-2.jpg"
                  alt="Materials"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabItem>

          {/* Operation & Maintenance */}
          <TabItem title="O&M">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Operation & Maintenance
                </h3>
                <hr className="w-16 border-yellow-400 mb-4" />
                <p className="italic text-gray-500 mb-6">
                  Layanan pemeliharaan & operasional untuk fasilitas migas yang
                  menjamin keberlangsungan dan efisiensi sistem.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Tim on-site
                    untuk pengawasan harian
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span>{" "}
                    Troubleshooting & perbaikan cepat
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">✔</span> Dukungan
                    jangka panjang berkelanjutan
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="/images/banner/hero-carousel-2.jpg"
                  alt="Operation and Maintenance"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </TabItem>
        </Tabs>
      </section>

      <section
        className="py-16 px-6 md:px-16 bg-gray-50 text-center"
        ref={addToRefs}
      >
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
