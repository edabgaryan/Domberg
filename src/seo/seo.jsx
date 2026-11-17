// src/seo/Seo.jsx
function toCanonical(u) {
  try {
    const url = new URL(u);
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return u;
  }
}

function jsonToScript(obj) {
  const s = JSON.stringify(obj ?? {})
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
  return s;
}

export default function Seo({
  title = "Domberg — строительство домов под ключ в Калининграде | Купить дом с участком",
  description = "Domberg: строительство современных домов под ключ и серый ключ в Калининграде и области. Проекты домов, фундаменты Domberg BASE, готовые участки. Цена от 7,5 млн ₽.",
  url = "https://domberg39.ru/",
  image = "https://domberg39.ru/og-image.jpg",
  ogType = "website",
  noindex = false,
  jsonLd,
}) {
  const canonical = toCanonical(url);
  const robots = noindex ? "noindex,nofollow" : "index,follow";

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://domberg39.ru/#business",
    name: "Domberg",
    url: "https://domberg39.ru/",
    description,
    image,
    telephone: "+7-909-798-2752",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Калининград",
      addressRegion: "Калининградская область",
      addressCountry: "RU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Калининградская область",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-909-798-2752",
      contactType: "sales",
      areaServed: "Kaliningrad",
      availableLanguage: ["Russian"],
    },
    sameAs: ["https://instagram.com/domberg39", "https://t.me/domberg39"],
  };

  const ld = Array.isArray(jsonLd) ? jsonLd : [jsonLd ?? defaultJsonLd];

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Domberg" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ru_RU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={canonical} />

      {ld.map((block, i) => (
        <script key={i} type="application/ld+json">
          {jsonToScript(block)}
        </script>
      ))}
    </>
  );
}
