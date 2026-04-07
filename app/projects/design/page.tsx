export default function DesignPage() {
  const designImages = [
    "DBAE.png",
    "notice.png",
    "chimpanzee.png",
    "pulsar.png",
    "dressing.png",
    "tmh.png",
    "fox.jpg",
    "crimes.png",
    "grumman.png",
    "grumman2.png",
    "f150.png",
    "apple.png",
    "icon.png",
    "ii.png",
    "monkygs.png",
    "smpciad.png",
    "testpagesmall.png",
  ];

  return (
    <>
      <h2>graphic design</h2>
      <p>
        This is a loose graphic design portfolio consisting of school projects,
        zine submissions, and experiments. Illustrations within photos are
        public domain images. Of course, this is an (very) incomplete list.
      </p>
      <ul>
        {designImages.map((image) => (
          <li key={image}>
            <img
              className={"w-full"}
              src={`/img/design/${image}`}
              alt={image}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
