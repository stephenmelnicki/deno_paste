import { asset, Head } from "$fresh/runtime.ts";

const TITLE = "Deno Paste";
const DESCRIPTION = "A minimal text storage service";
const KEYWORDS = [
  "deno",
  "fresh",
  "typescript",
];

const IMAGE_PATH = "/og-image.png";
const IMAGE_ALT = "A logo of a sauropod and the title Deno Paste";
const TYPE = "website";
const LOCALE = "en_US";

interface ContentMetaProps {
  url: URL;
}

export default function ContentMeta(props: ContentMetaProps) {
  const ogImageUrl = new URL(asset(IMAGE_PATH), props.url).href;

  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={props.url.href} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={IMAGE_ALT} />
      <meta property="og:type" content={TYPE} />
      <meta property="og:locale" content={LOCALE} />
      <meta name="keywords" content={KEYWORDS.join(", ")} />
    </Head>
  );
}
