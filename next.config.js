/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configurations...
    pages: {
      '/portfolio': {
        maxStaticPageGenerationSeconds: 120, // Adjust timeout as needed
      },
    },
  };
  
  module.exports = nextConfig;
  
