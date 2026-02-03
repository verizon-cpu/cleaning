/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is ESSENTIAL for GitHub Pages
  basePath: '/cleaning', // Your repository name
  images: {
    unoptimized: true, // Required for static export
  },
  // Optional: Disable React Strict Mode if you have warnings
  // reactStrictMode: true,
};

export default nextConfig;
