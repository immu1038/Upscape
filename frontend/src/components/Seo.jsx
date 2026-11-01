import { Helmet } from "react-helmet-async";
import { BRAND } from "@/data/site";

export default function Seo({
    title,
    description,
    path = "/",
    image,
    type = "website",
    jsonLd,
}) {
    const siteTitle = title ? `${title} | ${BRAND.name}` : `${BRAND.name} — ${BRAND.tagline}`;
    const desc = description || BRAND.description;
    const url = `${BRAND.canonical}${path}`;
    const img = image || `${BRAND.canonical}/og-image.svg`;

    return (
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={desc} />
            <link rel="canonical" href={url} />

            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={BRAND.name} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={img} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={desc} />
            <meta name="twitter:image" content={img} />

            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
}
