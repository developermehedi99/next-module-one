import { Inter } from "next/font/google";
import CustomLinks from "./components/CustomLinks";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 border-b border-cyan-950 mb-9">
          <ul className="flex gap-5">
            <li>
              <CustomLinks path="/">Home</CustomLinks>
            </li>
            <li>
              <CustomLinks path="/dashboard/setting">Setting</CustomLinks>
            </li>
            <li>
              <CustomLinks path="/dashboard/analytic">Analytic</CustomLinks>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
