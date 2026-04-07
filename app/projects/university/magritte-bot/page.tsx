import Link from "next/link";

export default function MagritteBotPage() {
  return (
    <>
      <h2>Magritte Bot</h2>
      <p>
        magritte_bot is a Twitter bot that generates random versions of
        Magritte&apos;s The Treachery of Images. It picks a random noun, pulls
        the first Google Images result, and composes the classic format. The bot
        was written in Python and tweeted twice daily from a Raspberry Pi in my
        dorm.
      </p>
      <p>The project was featured on the Robots on Typewriters podcast.</p>

      <div className="flex flex-wrap gap-x-3 gap-y-1 my-4">
        <a
          href="https://twitter.com/magritte_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          [twitter page]
        </a>
        <a
          href="https://github.com/mattnovelli/magritte_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          [github page]
        </a>
        <a
          href="https://www.batcamp.org/podcast/episode-40-ida-marmalade/"
          target="_blank"
          rel="noopener noreferrer"
        >
          [robots on typewriters]
        </a>
      </div>

      <Link href="/projects/university">[university projects]</Link>
    </>
  );
}
