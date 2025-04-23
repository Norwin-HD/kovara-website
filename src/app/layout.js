import { Inter } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";
import NavBar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata = {
  title: "Kovara",
  description: "Descubre lo ultimo en tecnología en nuestra tienda",
};

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <NavBar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
