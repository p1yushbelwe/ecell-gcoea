import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    localPatterns:[{
      
    }],
    remotePatterns:[new URL('https://picsum.photos/**')]
  },
  allowedDevOrigins:['10.114.21.97', 'detail-savor-sleeve.ngrok-free.dev']
 
};

export default nextConfig;
