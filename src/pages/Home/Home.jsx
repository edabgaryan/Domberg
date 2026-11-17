import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Seo from "../../seo/seo"; // проверь путь
import Service from "../../components/Service/Service";
import Management from "../../components/Management/Management";
import GalleryProject from "../../components/GalleryProject/GalleryProject";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ResponsiveImage from "../../components/ResponsiveImage";

export default function Home() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const metaTitle =
    t("seo.home.title", {
      defaultValue:
        "Строительство домов под ключ в Калининграде | Domberg — купить дом с участком",
    }) ||
    "Строительство домов под ключ в Калининграде | Domberg — купить дом с участком";

  const metaDescription =
    t("seo.home.description", {
      defaultValue:
        "Строительство современных домов в Калининграде и области: под ключ и серый ключ. Domberg — проекты домов, фундаменты Domberg BASE, готовые участки. Цена от 7,5 млн ₽.",
    }) ||
    "Строительство современных домов в Калининграде и области: под ключ и серый ключ. Domberg — проекты домов, фундаменты Domberg BASE, готовые участки. Цена от 7,5 млн ₽.";

  return (
    <PageWrapper>
      {/* SEO блок для главной (React 19, без Helmet) */}
      <Seo
        title={metaTitle}
        description={metaDescription}
        url="https://domberg39.ru/"
        ogType="website"
        noindex={false}
        jsonLd={[
          // WebSite
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://domberg39.ru/#website",
            name: "Domberg",
            url: "https://domberg39.ru/",
            inLanguage: i18n.language || "ru",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://domberg39.ru/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          },
          // WebPage
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://domberg39.ru/#webpage",
            url: "https://domberg39.ru/",
            name: metaTitle,
            description: metaDescription,
            isPartOf: { "@id": "https://domberg39.ru/#website" },
            inLanguage: i18n.language || "ru",
          },
          // LocalBusiness (HomeAndConstructionBusiness)
          {
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            "@id": "https://domberg39.ru/#business",
            name: "Domberg",
            url: "https://domberg39.ru/",
            description: metaDescription,
            image: "https://domberg39.ru/og-image.jpg",
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
            sameAs: [
              "https://instagram.com/domberg39",
              "https://t.me/domberg39",
            ],
          },
        ]}
      />

      <div className="home">
        <div className="feature">
          <div className="feature__block">
            <div className="feature__wrap">
              <div className="feature__container">
                <ResponsiveImage
                  className="feature__wrap-images"
                  loading="lazy"
                  folder="feature"
                  name="main"
                  alt={t("feature.imageAlt")}
                  eager
                />
                <div className="feature__text-block">
                  <h3 className="feature__wrap-title">{t("home.title")}</h3>
                  <p className="feature__wrap-paragraph">
                    {t("home.subtitle")}
                  </p>
                  <div className="feature__btn-block">
                    <Link to="/project" className="feature__btn feature__btn-b">
                      {t("home.projects")}
                    </Link>
                    <Link to="/about" className="feature__btn feature__btn-w">
                      {t("home.about")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="experience">
          <div className="experience__text-column">
            <h3 className="experience__text-title">
              {t("home.experience.title")}
            </h3>
          </div>
          <div className="experience__grid-column">
            <div className="experience__grid-container">
              <div className="experience__grid-item">
                <h4 className="experience__g-i-title">10+</h4>
                <p className="experience__g-i-paragraph">
                  {t("home.experience.years")}
                </p>
              </div>
              <div className="experience__grid-item">
                <h4 className="experience__g-i-title">200+</h4>
                <p className="experience__g-i-paragraph">
                  {t("home.experience.projects")}
                </p>
              </div>
              <div className="experience__grid-item experience__g-i-third">
                <h4 className="experience__g-i-title">100%</h4>
                <p className="experience__g-i-paragraph">
                  {t("home.experience.clients")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Service />
        <Management />
        <GalleryProject />
      </div>
    </PageWrapper>
  );
}
