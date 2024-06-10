async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog.annuar.site", 
      },
      {
        source: "/blog/:path*",
        destination: "https://blog.annuar.site/blog/:path*", 
      },
    ];
  },