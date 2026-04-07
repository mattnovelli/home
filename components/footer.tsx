export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-[x-small] text-gray-500 leading-8 text-center w-full">
      (c) {currentYear} -{" "}
      <a className="no-underline! text-[unset]!" href="/∞">
        ∞
      </a>{" "}
      Matthew Novelli.
    </div>
  );
}
