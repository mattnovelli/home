import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "contact",
  description: "contact information for matt novelli",
};

export default function ContactPage() {
  return (
    <Image
      alt="my email is my shortened name followed by my last name at gmail dot com"
      src={"/myemail.png"}
      width={352}
      height={35}
      preload
      className="dark:invert my-10! m-auto"
    />
  );
}
