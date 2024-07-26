

"use client"

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeContext } from "./hooks/ThemeContext";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // This code runs only on the client
    const storedTheme = localStorage.getItem("theme");
    setIsDark(storedTheme ? JSON.parse(storedTheme) : false);
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setIsDark(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Annuar Ndung'u - UI/UX Designer and Fullstack Developer</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/meta/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/meta/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/meta/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/meta/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/meta/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/meta/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/meta/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/meta/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/meta/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/meta/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/meta/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/meta/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/meta/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Annuar Ndung'u is a UI/UX designer and Fullstack developer from Nairobi, Kenya. Crafting custom web solutions that blend precision with passion." />
        <meta name="keywords" content="Annuar Ndungu, UI/UX designer, Fullstack developer, Nairobi, Kenya, web design, web development, AI integration, technical writing" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Annuar Ndung'u" />
        <meta property="og:title" content="Annuar Ndungu - UI/UX Designer and Fullstack Developer" />
        <meta property="og:description" content="Discover high-quality web solutions crafted by Annuar Ndungu, a skilled UI/UX designer and Fullstack developer from Nairobi, Kenya." />
        <meta property="og:image" content="https://www.annuar.site/meta/blackLogo.png" />
        <meta property="og:url" content="https://annuar.site" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Annuar Ndung'u - UI/UX Designer and Fullstack Developer" />
        <meta name="twitter:description" content="Discover high-quality web solutions crafted by Annuar Ndung'u, a skilled UI/UX designer and Fullstack developer from Nairobi, Kenya." />
        <meta name="twitter:image" content="https://www.annuar.site/meta/blackLogo.png" />
        <meta name="twitter:site" content="@dfw_ramo" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Annuar Ndungu",
              "url": "https://www.annuar.site",
              "description": "Annuar Ndungu is a UI/UX designer and Fullstack developer from Nairobi, Kenya. Crafting custom web solutions that blend precision with passion.",
              "jobTitle": "UI/UX Designer and Fullstack Developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Nairobi",
                "addressCountry": "Kenya"
              },
              "sameAs": [
                "https://twitter.com/dfw_ramo",
                "https://github.com/ramo-dev",
                "https://www.linkedin.com/in/annuar-ndungu"
              ]
            }
          `}
        </script>
      </head>
      <body className={`${inter.className} ${theme ? "dark" : ""}`}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ?? ''} />
        <Toaster position="top-right" />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      </body>
    </html>
  );
}


