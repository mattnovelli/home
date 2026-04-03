import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Matt Novelli dot com!",
  description: "a certain man with a certain website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` h-full antialiased `}>
      <body className=" w-full ">
        <Decorator />
        <Header />
        <main>{children}</main>
        <Decorator footer />
      </body>
    </html>
  );
}

function Decorator({ footer }: { footer?: boolean }) {
  return (
    <div className="min-w-screen  bg-red-800 h-[2px]! my-7">
      {footer && <Footer />}
    </div>
  );
}
