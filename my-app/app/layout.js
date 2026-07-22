import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title:
    "Astha Creatives | Creative Design, AI Videos & Web Development Agency",
  description:
    "Astha Creatives is a premium digital agency specializing in Creative Design, AI Video Creation, Video Editing, Website Development, and Data Analytics. Empower your brand with custom high-performance solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body>
        <div className="header">
          <Header />
        </div>
        {children}

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
