import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/spotify_tutorial.html",
        destination: "/projects/spotiamb",
        permanent: true,
      },
      {
        source: "/projects/flourthprinter.html",
        destination: "/projects/university/flourthprinter",
        permanent: true,
      },
      {
        source: "/projects/magritte_bot.html",
        destination: "/projects/university/magritte-bot",
        permanent: true,
      },
      {
        source: "/projects/CUM_MATRIX.html",
        destination: "/projects/university/cum-matrix",
        permanent: true,
      },
      {
        source: "/projects/verifried.html",
        destination: "/projects/university/verifried",
        permanent: true,
      },
      {
        source: "/projects/graphic_design.html",
        destination: "/projects/design",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
