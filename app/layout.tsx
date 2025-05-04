"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // `usePathname` hook
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <html lang="en">
      <head>
        <meta name="description" content="Picnic site description here" />
        <meta name="keywords" content="picnic, outdoors, events, activities" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="Picnic Site" />
        <meta
          property="og:description"
          content="Join us for an unforgettable picnic experience!"
        />
        <meta property="og:image" content="URL to image" />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:title" content="Picnic Site" />
        <meta
          name="twitter:description"
          content="Join us for an unforgettable picnic experience!"
        />
        <meta name="twitter:image" content="URL to image" />
        <title>Picnic Site</title>
      </head>
      <body className={`antialiased ${montserrat.className}`}>
        {loading && (
          <div className="loading-screen">
            <div className="loader"></div>
          </div>
        )}
        <div className="max-w-full w-full">
          <Header />

          <main>
            {children} <ToastContainer />
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
