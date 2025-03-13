/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        disableStaticImages: false // Change this to false
    },
    webpack: (config) => {
        // Add loader for png files
        config.module.rules.push({
            test: /\.(png|jpg|jpeg|gif|svg)$/i,
            type: 'asset/resource'
        });
        config.cache = false;
        return config;
    }
};

module.exports = nextConfig;