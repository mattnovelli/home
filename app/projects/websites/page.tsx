import Link from "next/link";

export default function WebsitePage() {
  return (
    <>
      <h2>websites i&apos;ve made</h2>
      <div className="flex flex-col gap-3">
        <WebsiteCard
          title="dearborn audio effects"
          description="Small music electronics business in Urbana."
          href="https://dearborn.cool"
        />
        <WebsiteCard
          title="julia eversmann portfolio"
          description="graphic designer based in Illinois"
          href="https://dearborn.cool"
        />
        <WebsiteCard
          title="WPGU 107.1"
          description="student-run radio station at UIUC"
          href="https://wpgu.com"
        />
        <WebsiteCard
          title="this one"
          description="yer looking at it"
          href="/"
        />
      </div>
    </>
  );
}

function WebsiteCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="grid grid-cols-[1fr_7fr] border-1 no-underline! text-foreground!  leading-normal"
    >
      <div className="h-5 w-5 aspect-square ">.</div>
      <div className="text-left! p-1 ">
        <h2 className="mb-0!">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
