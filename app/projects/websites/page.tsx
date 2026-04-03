import Link from "next/link";
import Image from "next/image";

export default function WebsitePage() {
  return (
    <>
      <h2>websites i&apos;ve made</h2>
      <div className="flex flex-col gap-3 max-w-[20rem] mx-auto ">
        <WebsiteCard
          title="dearborn audio effects"
          description="Small music electronics business in Urbana."
          href="https://dearborn.cool"
          imgSrc="/img/websites/dbfx.svg"
        />
        <WebsiteCard
          title="julia eversmann"
          description="portfolio for graphic designer based in Illinois"
          href="https://juliaeversmann.com"
          imgSrc="/img/websites/lizard.svg"
        />
        <WebsiteCard
          title="WPGU 107.1"
          description="student-run radio station at UIUC (initial design)"
          href="https://wpgu.com"
          imgSrc="/img/websites/wpgu.svg"
        />
      </div>
    </>
  );
}

function WebsiteCard({
  title,
  description,
  href,
  imgSrc,
}: {
  title: string;
  description: string;
  href: string;
  imgSrc: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full  text-sm h-25  flex flex-row border no-underline! text-foreground!  leading-normal"
    >
      <Image
        src={imgSrc}
        alt={title}
        width={20}
        height={20}
        className="h-full w-30 aspect-square m-0! "
      />
      <div className="text-left! py-3 px-3 bg-background w-full ">
        <h2 className="my-0! text-lg text-left">{title}</h2>
        <p className="text-left!">{description}</p>
      </div>
    </Link>
  );
}
