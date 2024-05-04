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
        <div className="grid grid-cols-10 h-screen">
          <div className="col-span-2 bg-green-800 h-screen grid grid-rows-10">
            <SideNav/>
          </div>
          <div className="col-span-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
