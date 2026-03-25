import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h2>about</h2>
      <Image
        alt="A film photo taken at night with flash of myself inside a tent, holding up a bag of trail mix."
        priority
        src={"/tent.png"}
        width={272}
        height={204}
        className="mx-auto"
      />
      <p>
        Hi, I'm matt novelli. I'm currently working as a software developer at
        the Champaign-Urbana Mass Transit District.
      </p>
      <p>
        I enjoy rollerblading, eating, and ocassionally both at the same time.
      </p>
      <p>
        Check out some of my <Link href={"/projects"}>personal projects</Link>.
      </p>
    </div>
  );
}
