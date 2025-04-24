import React from "react";
import Navbar from "../atoms/home/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromGroundWater,
  faCircleNotch,
  faCompassDrafting,
  faHospitalUser,
  faMountainCity,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";
import { CheckIcon } from "flowbite-react";

export default function ServicePages() {
  const features = [
    {
      title: "Profesionalisme & Kompetensi",
      desc: "Tim kami terdiri dari tenaga ahli yang telah berpengalaman di berbagai proyek besar dalam dan luar negeri.",
      items: [
        "Sertifikasi nasional & internasional",
        "Didukung SDM lokal & ekspatriat",
        "Tingkat keahlian sesuai kebutuhan proyek",
      ],
    },
    {
      title: "Solusi Terpadu & Fleksibel",
      desc: "Menyediakan layanan end-to-end mulai dari engineering, pengadaan, hingga operasional & pemeliharaan.",
      items: [
        "Engineering & Project Management",
        "Supply material & tenaga kerja",
        "Dukungan operasi & maintenance",
      ],
    },
    {
      title: "Komitmen Mutu & Keselamatan",
      desc: "Menjaga kualitas layanan dan keselamatan kerja adalah prioritas utama dalam setiap lini pekerjaan kami.",
      items: [
        "Prosedur QA/QC ketat",
        "Sistem pelaporan HSE aktif",
        "Audit berkala & evaluasi risiko",
      ],
    },
    {
      title: "Jaringan Luas & Responsif",
      desc: "Kami memiliki jaringan vendor dan mitra kerja yang kuat, memungkinkan pengadaan dan pengerjaan proyek secara efisien.",
      items: [
        "Vendor terpercaya & terverifikasi",
        "Waktu respon cepat & adaptif",
        "Layanan 24/7 sesuai kebutuhan klien",
      ],
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="relative bg-[url('/images/banner/footer-bg.jpg')] bg-center bg-cover bg-no-repeat h-[300px] flex items-center justify-center">
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0" />

        {/* Konten teks */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Services</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-400 font-semibold">Home</span> /
            Service
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 inline-block relative mb-2">
            <span className="border-b-4 border-yellow-400 px-2">
              Our Services
            </span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            PT Adimukti Energi Nusantara menyediakan solusi terintegrasi di
            sektor energi, mulai dari rekayasa teknik hingga pemeliharaan
            operasional.
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
              Engineering & Project
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Layanan desain, konstruksi, dan pengawasan proyek energi dan
              infrastruktur dari awal hingga akhir.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
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
              Penyediaan tenaga kerja lokal & ekspatriat untuk mendukung proyek
              energi dan industri sesuai kebutuhan.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          {/* Fabrication */}
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
              Fabrikasi struktur baja, tangki, dan pipa sesuai spesifikasi
              industri migas & power plant.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          {/* Materials Supply */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faCircleNotch}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Materials Supply
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Pengadaan pelumas, suku cadang, dan komponen industri dengan
              standar mutu tinggi.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          {/* O&M */}
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
              Perawatan dan pengelolaan fasilitas industri untuk efisiensi dan
              keberlangsungan operasional.
            </p>
            <a
              href="#"
              className="text-sm text-blue-700 hover:underline flex items-center justify-center gap-1"
            >
              Read more →
            </a>
          </div>

          {/* HSE Support */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4 flex justify-center">
              <FontAwesomeIcon
                icon={faArrowUpFromGroundWater}
                className="w-[70px] h-[56px]"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              HSE Support
            </h3>
            <div className="w-16 h-1 bg-gray-200 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-4">
              Konsultasi dan pendampingan terkait keselamatan kerja dan
              lingkungan sesuai regulasi industri migas.
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <CheckIcon className="w-4 h-4 text-yellow-400 mt-1 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Kenapa Memilih PT Adimukti Energi Nusantara?
            </h2>
            <p className="text-gray-600 mb-8">
              Kami hadir sebagai mitra strategis untuk memenuhi kebutuhan proyek
              Anda dengan layanan yang profesional, cepat, dan terpercaya di
              sektor energi dan industri.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">👷</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Tenaga Profesional
                  </h4>
                  <p className="text-sm text-gray-600">
                    Tim tersertifikasi dan berpengalaman menangani proyek-proyek
                    migas skala nasional dan internasional.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">⚙️</span>
                <div>
                  <h4 className="font-bold text-gray-700">Solusi Menyeluruh</h4>
                  <p className="text-sm text-gray-600">
                    Mulai dari engineering, pengadaan, konstruksi, hingga
                    pemeliharaan dalam satu integrasi layanan.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Fokus pada Keselamatan
                  </h4>
                  <p className="text-sm text-gray-600">
                    Penerapan sistem HSE secara ketat untuk menjamin keselamatan
                    kerja dan keberlanjutan proyek.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">🚀</span>
                <div>
                  <h4 className="font-bold text-gray-700">Respons Cepat</h4>
                  <p className="text-sm text-gray-600">
                    Respon cepat dan fleksibel dalam memenuhi kebutuhan proyek
                    maupun kondisi darurat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="/images/banner/hero-carousel-5.jpg"
              alt="Tim profesional AEN"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
