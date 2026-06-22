/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com"          },
      { protocol: "https", hostname: "via.placeholder.com"          },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com"    },
      { protocol: "https", hostname: "*.s3.amazonaws.com"           },
      { protocol: "https", hostname: "*.supabase.co"                },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Exclude server-only packages from client bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs:        false,
        net:       false,
        tls:       false,
        crypto:    false,
        "bcryptjs": false,
      }
    }
    return config
  },
}

export default nextConfig
