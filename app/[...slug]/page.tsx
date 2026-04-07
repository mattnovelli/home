import { permanentRedirect } from "next/navigation";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function OldWebsiteRedirects({ params }: PageProps) {
  const { slug } = await params;

  const oldToNew = {
    "/about.html": "/about",
    "/spotify_tutorial.html": "/projects/spotiamb",
    "/projects/flourthprinter.html": "/projects/university/flourthprinter",
    "/projects/magritte_bot.html": "/projects/university/magritte-bot",
    "/projects/CUM_MATRIX.html": "/projects/university/cum-matrix",
    "/projects/verifried.html": "/projects/university/verifried",
    "/projects/graphic_design.html": "/projects/design",
    "/contact.html": "/contact",
  };

  // Reconstruct the full path from the slug array
  const requestedPath = "/" + slug.join("/");

  // Check if the path exists in our redirect mapping
  if (requestedPath in oldToNew) {
    permanentRedirect(oldToNew[requestedPath as keyof typeof oldToNew]);
  }

  // If no redirect mapping found, trigger 404
  notFound();
}
