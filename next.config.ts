import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
    output: "export", // 👈 agar bisa di-export sebagai static site
    trailingSlash: true, // 👈 untuk memastikan semua path pakai slash
    reactStrictMode: true,
    images: {
        unoptimized: true, // 👈 penting! agar tidak pakai Next.js image optimizer (karena tidak bisa di static hosting)
    },
};

export default withFlowbiteReact(nextConfig);
