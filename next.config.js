// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: [
//       "res.cloudinary.com"
//     ],
//     formats: ["image/avif", "image/webp"],
//   },
// }

// module.exports = nextConfig

const nextConfig = {
  // fastRefresh: false,
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
