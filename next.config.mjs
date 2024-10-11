/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ["@svgr/webpack"], // Add this rule to handle SVG imports as components
        });
    
        return config;
      },
};

export default nextConfig;
