"use client";

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
        <div className=" w-full">
          <Header />
          <main>
            {children}
            <ToastContainer />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
