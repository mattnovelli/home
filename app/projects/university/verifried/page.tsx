import Link from "next/link";

export default function VerifriedPage() {
  return (
    <>
      <h2>verifried</h2>
      <p>
        verifried is an Android app created for a CS125 final project. The idea
        was an app that only allowed the user to tweet at verified accounts. My
        partner and I had just a few weeks to learn UI design and the Twitter
        API, and the final product worked great.
      </p>

      <img
        src="/img/university/verifiedBadge.png"
        alt="verifried logo"
        className="w-full max-w-sm my-4"
      />

      <p>verifried logo.</p>

      <Link href="/projects/university">[university projects]</Link>
    </>
  );
}
