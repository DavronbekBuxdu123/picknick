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
    <html lang="en" className="">
      <body className={` antialiased ${montserrat.className}`}>
        <div className="w-full">
          <Header />

          <main className="">
            {children} <ToastContainer />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
