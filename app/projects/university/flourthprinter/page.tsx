import Image from "next/image";
import Link from "next/link";

export default function FlourthPrinterPage() {
  return (
    <>
      <h2>FlourthPrinter</h2>
      <p className="mb-3 text-center! text-sm">(floor + fourth = flourth)</p>
      <p className="text-justify">
        FlourthPrinter was a year-long project I created with my roomate, Ellie,
        after purchasing a used thermal printer off eBay for $20. The printer
        was jerryrigged to accept serial inputs from a raspberry pi and power
        from a PCI card. Ellie and I wrote some Python code, and conncted the
        bot to twitter using the Tweepy library. Any tweet containing{" "}
        <i>@flourthprinter</i> would print out in our dorm. Images were turned
        into ASCII art and printed. We even got in the student newspaper!
      </p>
      <figure>
        <Image
          width={300}
          height={300}
          src="/img/university/printer.gif"
          alt="Animated image of a thermal printer printing tweets"
          className="mx-auto  my-4"
        />
        <figcaption>flourthprinter in action.</figcaption>
      </figure>

      <figure>
        <Image
          width={300}
          height={300}
          src="/img/university/ncr.png"
          alt="NCR 7167 thermal printer"
          className=" my-4"
        />
        <figcaption>An NCR 7167 thermal printer.</figcaption>
      </figure>

      <Link className="" href="/projects/university">
        [other university projects]
      </Link>
    </>
  );
}
