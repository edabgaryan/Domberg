import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import OrderButton from "../Project/OrderButton";
import ResponsiveImage from "../../components/ResponsiveImage";
import Seo from "../../seo/seo"; // ✅ SEO

export default function LandSelection() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const legalItems = t("land.legalItems", { returnObjects: true }) || [];
  const sellerItems = t("land.sellerItems", { returnObjects: true }) || [];
  const structureItems =
    t("land.structureItems", { returnObjects: true }) || [];

  return (
    <PageWrapper>
      {/* ✅ SEO блок */}
      <Seo
        title="Подбор участка в Калининграде | Domberg — поиск и проверка земли под строительство"
        description="Поможем выбрать и проверить участок под строительство дома в Калининграде и области: правовой анализ, проверка продавца, налоги, инженерные ограничения и структура сделки."
        url="https://domberg39.ru/land-selection"
        ogType="website"
        noindex={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Подбор участка под строительство",
          provider: {
            "@type": "LocalBusiness",
            name: "Domberg",
            url: "https://domberg39.ru/",
          },
          areaServed: "Kaliningrad Oblast, RU",
          url: "https://domberg39.ru/land-selection",
          description:
            "Выбор и проверка земельного участка: правовой аудит, проверка продавца, оценка налогов и ограничений, сопровождение сделки.",
        }}
      />

      <section className="land__selection">
        <div className="land-selection__container">
          <h1 className="land-selection__title">{t("land.title")}</h1>

          <ResponsiveImage
            folder="land"
            name="land"
            alt={t("land.imageAlt")}
            className="land-selection__image"
            width={1200}
            height={675}
            eager
          />

          <p className="land-selection__intro">{t("land.p1")}</p>
          <p className="land-selection__intro">{t("land.p2")}</p>

          <ul className="land-selection__list">
            <li>
              <strong>{t("land.legalTitle")}</strong>
              <ul>
                {legalItems.map((item, i) => (
                  <li key={`legal-${i}`}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>{t("land.sellerTitle")}</strong>
              <ul>
                {sellerItems.map((item, i) => (
                  <li key={`seller-${i}`}>{item}</li>
                ))}
              </ul>
            </li>

            <li>
              <strong>{t("land.taxes")}</strong>
            </li>

            <li>
              <strong>{t("land.structureTitle")}</strong>
              <ul>
                {structureItems.map((item, i) => (
                  <li key={`structure-${i}`}>{item}</li>
                ))}
              </ul>
            </li>
          </ul>

          <div className="order__btn-block">
            <OrderButton
              projectName={t("land.buttonProjectName")}
              customTitle={t("land.buttonTitle")}
              showFinish={false}
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
