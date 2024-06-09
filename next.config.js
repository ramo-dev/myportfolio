async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://annuar-blog.vercel.app/blog", 
      },
      {
        source: "/blog/:path*",
        destination: "https://annuar-blog.vercel.app/blog/:path*", 
      },
    ];
  },