async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://https://annuar-blog.vercel.app/blog", 
      },
      {
        source: "/blog/:path*",
        destination: "https://https://annuar-blog.vercel.app/blog/:path*", 
      },
    ];
  },