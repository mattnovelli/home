import Image from "next/image";

export default function NotFound() {
  return (
    <div className="">
      <h2>page not found</h2>
      <Image
        src={"/seashore.gif"}
        className="mx-auto"
        priority
        alt=""
        width={346}
        height={360}
      />
    </div>
  );
}
