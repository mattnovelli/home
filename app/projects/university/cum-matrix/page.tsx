import Link from "next/link";

export default function CumMatrixPage() {
  return (
    <>
      <h2>CUM_MATRIX</h2>
      <p className="mb-3">
        (Champaign-Urbana Mass Transit District + LED Matrix)
      </p>
      <p>
        CUM_MATRIX combines the CUMTD API, a 64x32 LED matrix, and a Raspberry
        Pi to create a mini timetable of CUMTD bus departures. The board
        refreshes every 30 seconds and cycles between two screens with two times
        each, similar to a real timetable.
      </p>

      <img
        src="/img/university/sign.gif"
        alt="Animated LED matrix showing bus times"
        className="w-full max-w-lg my-4"
      />

      <p>Bus times.</p>

      <div className="my-4">
        <a
          href="https://developer.cumtd.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [CUMTD API]
        </a>
      </div>

      <Link href="/projects/university">[university projects]</Link>
    </>
  );
}
