import Image from "next/image";

export default function Spotiamb() {
  return (
    <div className="bg-background p-3 m-3">
      <h1>Reviving Winamp for Spotify: visualizers, equalizers, and themes</h1>
      <hr className="border-dashed my-5" />
      <p>
        Music streaming has changed how people control the music they listen to.
        The Spotify desktop app has equalizer settings tucked away and difficult
        to access. There's no native visualizers, either.
      </p>
      <p>
        I've found a solution that involves integrating Spotify with Winamp,
        allowing the user to enable custom equalizations,{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.geisswerks.com/milkdrop/"
        >
          visualizers
        </a>
        , and themes.
      </p>
      <figure>
        <Image
          preload
          src="/img/spotiamb/example1.gif"
          alt="An animated gif of winamp playing a song while a music visualizer moves to the beat."
          className="object-contain shadow-md"
          width={300}
          height={20}

          //   style="object-fit: contain; box-shadow: 3px 3px 10px lightgrey;"
        />
        <figcaption>how music was meant to be watched.</figcaption>
      </figure>

      <h2 className="text-left!">Spotiamb</h2>
      <p>
        Spotiamb (pronounced "Spotiamp") is a modified version of winamp
        released by legendary programmer and Spotify dev{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://en.wikipedia.org/wiki/Ludvig_Strigeus"
        >
          Ludvig Strigeus
        </a>{" "}
        cir. 2015. It allows the user to login with their Spotify Premium
        (sorry) account and stream music through the winamp interface.
      </p>
      <figure>
        <img
          src="/img/spotiamb/example2.gif"
          alt="portrait"
          // style="box-shadow: 3px 3px 10px lightgrey;"
          className="shadow-md "
        />
      </figure>

      <p>
        Although the Spotiamb page is no longer live, you can still{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://web.archive.org/web/20160113191228/http://spotiamb.com/"
        >
          view the site on the internet archive{" "}
        </a>
        and download it below. You'll also need to download the latest
        compatible version of winamp in order to extract the visualizer code.
      </p>
      <div className="text-center flex flex-col gap-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="ware/Spotiamb_0.2.1_Setup.zip"
        >
          [spotiamb download]
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.geisswerks.com/milkdrop/winamp566_full_en-us.exe"
        >
          [winamp download]
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.geisswerks.com/milkdrop/favorite_presets_2013_12.zip"
        >
          [visualizer presets]
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://skins.webamp.org/"
        >
          [winamp themes]
        </a>
        <a target="_blank" rel="noopener noreferrer" href="ware/msvcr90.zip">
          [required dll file]
        </a>
      </div>
      <p></p>
      <em>
        <strong>How to install the visualizer plugin from winamp:</strong>
        <ol>
          <li>
            Create a folder named <code>plugins/</code> in the Spotiamb program
            folder.
          </li>
          <li>
            Copy the <code>vis_*.dll</code> files (and necessary companion
            files) from Winamp.
          </li>
          <li>
            Unzip the <code>msvcr90.dll</code> file into the same folder as
            Spotiamb.exe.
          </li>
        </ol>
      </em>
      <img
        src="/img/spotiamb/example3.gif"
        alt="portrait"
        // style="box-shadow: 3px 3px 10px lightgrey;"
        className="shadow-md"
      />
      <a className="" href="/">
        [home page]
      </a>
    </div>
  );
}
