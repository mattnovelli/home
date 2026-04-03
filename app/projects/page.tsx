import Link from "next/link";

export default function ProjectsList() {
  return (
    <nav className="mt-10">
      <h2>projects</h2>
      <ul className="mb-5">
        <BracketLink title="cars" li isNew href="/projects/cars" />
        <BracketLink title="websites" li href="/projects/websites" />
        <BracketLink
          title="graphic design"
          li
          href="/projects/graphic-design"
        />

        <BracketLink
          title="university projects"
          li
          href="/projects/university"
        />
        <BracketLink
          title="spotiamb install guide"
          li
          href="/projects/spotiamb"
        />

        {/* <ProjectLink title="flourthprinter" isNew slug="flourthprinter" />
        <ProjectLink title="CUM_MATRIX" isNew slug="CUM_MATRIX" />
        <ProjectLink title="verifried" isNew slug="verifried" /> */}
        {/* <ProjectLink title="video production" isNew slug="video-production" /> */}
      </ul>

      <BracketLink title="back to home" href="/" />
    </nav>
  );
}

function BracketLink({
  title,
  href,
  isNew,
  li,
}: {
  title: string;
  href: string;
  isNew?: boolean;
  li?: boolean;
}) {
  const meat = (
    <Link href={href}>
      <span aria-hidden={true}>[</span>
      {title}
      <span aria-hidden={true}>]</span>
    </Link>
  );

  if (li) {
    return <li>{meat}</li>;
  } else {
    return meat;
  }
}
