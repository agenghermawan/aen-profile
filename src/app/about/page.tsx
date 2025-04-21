"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../atoms/home/navbar";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const teamMembers = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      img: "/images/team-1.jpg",
      desc: "Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow",
    },
    {
      name: "Sarah Jhonson",
      role: "Product Manager",
      img: "/images/team-2.jpg",
      desc: "Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut",
    },
    {
      name: "William Anderson",
      role: "CTO",
      img: "/images/team-3.jpg",
      desc: "Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui",
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      img: "/images/team-4.jpg",
      desc: "Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur",
    },
    {
      name: "Brian Doe",
      role: "Marketing",
      img: "/images/team-5.jpg",
      desc: "Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit",
    },
    {
      name: "Josepha Palas",
      role: "Operation",
      img: "/images/team-6.jpg",
      desc: "Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About</h1>
          <p className="text-sm md:text-base">
            <span className="text-yellow-400 font-semibold">Home</span> / About
          </p>
        </div>
      </div>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Komitmen Kami untuk Industri Energi
          </h2>

          <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
            {/* Text Content */}
            <div>
              <p className="text-sm text-gray-500 font-semibold mb-1">
                EST 2015
              </p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 mb-4">
                Didirikan pada tahun 2015, PT AEN telah berkembang sebagai mitra
                strategis dalam industri minyak dan gas di Indonesia. Kami hadir
                memberikan layanan teknik, pengadaan tenaga kerja, fabrikasi,
                dan material dengan pendekatan profesional dan berintegritas.
              </p>

              {/* List */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a7 7 0 107 7 7 7 0 00-7-7zM8.707 13.293a1 1 0 01-1.414 0L5 11l1.414-1.414L8 11.172l5.293-5.293L15 7l-6.293 6.293z" />
                  </svg>
                  Solusi rekayasa dan konstruksi menyeluruh
                </li>
                <li className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a7 7 0 107 7 7 7 0 00-7-7zM8.707 13.293a1 1 0 01-1.414 0L5 11l1.414-1.414L8 11.172l5.293-5.293L15 7l-6.293 6.293z" />
                  </svg>
                  SDM bersertifikat dan berpengalaman
                </li>
                <li className="flex items-start text-gray-700">
                  <svg
                    className="w-5 h-5 text-yellow-500 mt-1 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a7 7 0 107 7 7 7 0 00-7-7zM8.707 13.293a1 1 0 01-1.414 0L5 11l1.414-1.414L8 11.172l5.293-5.293L15 7l-6.293 6.293z" />
                  </svg>
                  Komitmen terhadap kualitas & keselamatan
                </li>
              </ul>

              <p className="text-gray-700 mb-6">
                Kami percaya bahwa integritas, responsif, dan akuntabilitas
                adalah pondasi dalam membangun hubungan jangka panjang dengan
                mitra kami.
              </p>

              <div className="flex items-center gap-2 text-yellow-500 font-medium cursor-pointer">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22v-20l18 10-18 10z" />
                </svg>
                <span className="text-gray-700 hover:text-yellow-600">
                  Watch Video
                </span>
              </div>
            </div>

            {/* Image */}
            <div>
              <img
                src="/images/banner/footer-bg.jpg"
                alt="Our Story"
                className="w-full h-auto object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            <span className="border-t-2 border-yellow-400 w-10 inline-block mr-3 align-middle"></span>
            Stats
            <span className="border-t-2 border-yellow-400 w-10 inline-block ml-3 align-middle"></span>
          </h2>
          <p className="text-gray-500 mb-10">
            Beberapa pencapaian yang mencerminkan dedikasi kami dalam
            menyediakan layanan terbaik di industri migas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md py-6 px-4 rounded">
              <div className="text-yellow-400 text-4xl mb-2">😊</div>
              <h3 className="text-2xl font-bold text-gray-800">232</h3>
              <p className="text-sm text-gray-600">Happy Clients</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md py-6 px-4 rounded">
              <div className="text-yellow-400 text-4xl mb-2">📋</div>
              <h3 className="text-2xl font-bold text-gray-800">521</h3>
              <p className="text-sm text-gray-600">Projects</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md py-6 px-4 rounded">
              <div className="text-yellow-400 text-4xl mb-2">🎧</div>
              <h3 className="text-2xl font-bold text-gray-800">1463</h3>
              <p className="text-sm text-gray-600">Hours Of Support</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white shadow-md py-6 px-4 rounded">
              <div className="text-yellow-400 text-4xl mb-2">👥</div>
              <h3 className="text-2xl font-bold text-gray-800">15</h3>
              <p className="text-sm text-gray-600">Hard Workers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Nilai dan Keunggulan Kami
            </h2>
            <p className="text-gray-600 mb-8">
              PT AEN menjunjung tinggi nilai profesionalisme, integritas, dan
              efisiensi. Kami merespons kebutuhan pasar dengan solusi yang
              adaptif dan cepat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">🛠️</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Teknologi & Engineering
                  </h4>
                  <p className="text-sm text-gray-600">
                    Layanan teknik dan manajemen proyek menyeluruh untuk
                    kebutuhan industri migas.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">🛡️</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Pengadaan & Material
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pengadaan material berkualitas tinggi dengan efisiensi dan
                    ketepatan.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">☀️</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Tenaga Kerja Profesional
                  </h4>
                  <p className="text-sm text-gray-600">
                    Tenaga ahli bersertifikasi, baik lokal maupun ekspatriat.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-xl">🌞</span>
                <div>
                  <h4 className="font-bold text-gray-700">
                    Operation & Maintenance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Pemeliharaan fasilitas dengan sistem kontrol kualitas yang
                    ketat.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <img
              src="/images/feature-image.jpg"
              alt="Feature"
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            <span className="border-b-4 border-yellow-400 inline-block pb-1">
              Team
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            Kami didukung oleh tim profesional yang berdedikasi tinggi di
            bidangnya, berkomitmen untuk memberikan hasil terbaik bagi klien.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mb-4 shadow"
                />
                <h4 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h4>
                <span className="text-sm italic text-gray-500">
                  {member.role}
                </span>
                <p className="text-sm text-gray-600 mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
