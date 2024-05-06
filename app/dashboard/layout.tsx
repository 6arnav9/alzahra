

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import SideNav from "../components/Sidenav";
// const inter = Inter({ subsets: ["latin"] });
// bg-gradient-to-b from-green-800 to-green-500
export const metadata: Metadata = {
  title: "Al Zahra | Dashboard",
  description: "Al Zahra Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <body className="">
        <div className="md:grid md:grid-cols-10 h-screen max-md:block">
          <SideNav/>
          <div className="md:col-span-8 min-w-fit min-h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
