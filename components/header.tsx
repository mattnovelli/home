import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto ">
      <Link className="text-foreground! no-underline!" href={"/"}>
        <h1 className="">
          <span aria-hidden className="mr-2">
            &gt;&gt;
          </span>
          matt novelli
          <span aria-hidden className="ml-2">
            &lt;&lt;
          </span>
        </h1>
      </Link>
    </header>
  );
}
