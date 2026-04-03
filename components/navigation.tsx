import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="leading-5 text-center!">
      <div className="my-5 font-bold" aria-hidden={true}>
        ↓↓↓↓↓↓↓↓
      </div>
      <ul>
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link className="font-bold" href={"/projects"}>
            projects
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://linkedin.com/in/mattnovelli"}
          >
            linkedin
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/mattnovelli"}
          >
            github
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://instagram.com/matthewnovelli"}
          >
            instagram
          </Link>
        </li>
      </ul>
      <div className="my-5 font-bold">↑↑↑↑↑↑↑↑</div>
    </nav>
  );
}
