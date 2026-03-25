import Image from "next/image";

export default function ContactPage() {
  return (
    <Image
      alt="my email is my shortened name followed by my last name at gmail dot com"
      src={"/myemail.png"}
      width={352}
      height={35}
      priority
      className="dark:invert my-10"
    />
  );
}
