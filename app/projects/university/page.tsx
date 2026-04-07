import Link from "next/link";

export default function UniversityProjectsPage() {
  return (
    <>
      <h2>university projects</h2>
      <p>Projects from my time at University of Illinois.</p>

      <ul className="flex flex-col gap-2 my-5">
        <li>
          <Link href="/projects/university/flourthprinter">
            [FlourthPrinter]
          </Link>
        </li>
        <li>
          <Link href="/projects/university/magritte-bot">[Magritte Bot]</Link>
        </li>
        <li>
          <Link href="/projects/university/cum-matrix">[CUM_MATRIX]</Link>
        </li>
        <li>
          <Link href="/projects/university/verifried">[verifried]</Link>
        </li>
      </ul>

      <div className="mt-6">
        <Link href="/projects">[projects]</Link>
      </div>
    </>
  );
}
