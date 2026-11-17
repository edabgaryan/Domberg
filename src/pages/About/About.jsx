import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Seo from "../../seo/seo"; // ✅ проверь путь
import AboutValue from "../About/AboutValue/AboutValue";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* ✅ SEO блок */}
      <Seo
        title="О компании Domberg — строительство домов в Калининграде"
        description="Domberg строит современные дома под ключ и серый ключ в Калининграде и области. Более 10 лет опыта, 200+ реализованных проектов, собственная технология Domberg BASE."
        url="https://domberg39.ru/about"
        ogType="website"
        noindex={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Domberg",
          url: "https://domberg39.ru/about",
          description:
            "Domberg — компания по строительству домов под ключ в Калининграде и области.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Калининград",
            addressCountry: "RU",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+7-909-798-2752",
            contactType: "sales",
            areaServed: "Kaliningrad",
            availableLanguage: ["Russian"],
          },
          sameAs: ["https://instagram.com/domberg39", "https://t.me/domberg39"],
        }}
      />

      <section className="about">
        <div className="about__welcome">
          <div className="about__w-box">
            <h2 className="w-box__title">{t("about.title")}</h2>
            <p className="w-box__paragraph">{t("about.p1")}</p>
            <p className="w-box__paragraph">{t("about.p2")}</p>
            <p className="w-box__paragraph">{t("about.p3")}</p>
          </div>
          <div className="about__w-img">
            <img src="https://i.ibb.co/FkChqShQ/dom4.jpg" alt="Дом Domberg" />
          </div>
        </div>
        <AboutValue />
      </section>
    </PageWrapper>
  );
}
