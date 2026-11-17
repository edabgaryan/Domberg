import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import OrderButton from "../Project/OrderButton";
import Seo from "../../seo/seo";
import { PRICE_SECTIONS, PACKAGES } from "./API/PriceListData";

export default function PriceList() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleSection = (key) => {
    setActiveSection((prev) => (prev === key ? null : key));
  };

  return (
    <PageWrapper>
      <Seo
        title="Прайс-лист строительных услуг в Калининграде | Domberg — расценки на строительство"
        description="Актуальный прайс-лист на строительство домов в Калининграде: фундамент, стены, кровля, фасад, электрика, сантехника, отделка. Цены от 16 000 ₽/м²."
        url="https://domberg39.ru/price-list"
        ogType="website"
        noindex={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Прайс-лист строительных услуг",
          provider: {
            "@type": "LocalBusiness",
            name: "Domberg",
            url: "https://domberg39.ru/",
          },
          areaServed: "Kaliningrad Oblast, RU",
          url: "https://domberg39.ru/price-list",
          description:
            "Расценки на строительство домов и коттеджей в Калининграде и области: фундаментные работы, монтаж стен, кровля, фасад, электрика, сантехника, отделка.",
        }}
      />

      <section className="price-list">
        <div className="price-list__container">
          {/* ── Header */}
          <h1 className="price-list__title">
            {t("priceList.title", "Прайс-лист строительных услуг")}
          </h1>
          <p className="price-list__subtitle">
            {t(
              "priceList.subtitle",
              "В таблице указаны средние расценки на отдельные виды работ. Для расчёта точной стоимости вашего объекта запросите смету — это бесплатно и занимает 2–3 рабочих дня.",
            )}
          </p>

          {/* ── Package cards */}
          <div className="price-list__packages">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.key}
                className={`price-list__package${pkg.highlight ? " price-list__package--highlight" : ""}`}
              >
                <span className="price-list__package-label">
                  {t(`priceList.packages.${pkg.key}.label`, pkg.label)}
                </span>
                <span className="price-list__package-price">
                  {t(`priceList.packages.${pkg.key}.price`, pkg.price)}
                </span>
                <span className="price-list__package-desc">
                  {t(`priceList.packages.${pkg.key}.desc`, pkg.desc)}
                </span>
              </div>
            ))}
          </div>

          {/* ── Accordion sections */}
          <div className="price-list__sections">
            {PRICE_SECTIONS.map((section) => {
              const isOpen = activeSection === section.key;
              return (
                <div
                  key={section.key}
                  className={`price-list__section${isOpen ? " price-list__section--open" : ""}`}
                >
                  <button
                    className="price-list__section-header"
                    onClick={() => toggleSection(section.key)}
                    aria-expanded={isOpen}
                  >
                    <span>
                      {t(`priceList.sections.${section.key}`, section.title)}
                    </span>
                    <svg
                      className="price-list__chevron"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="price-list__table-wrap">
                      <table className="price-list__table">
                        <thead>
                          <tr>
                            <th>{t("priceList.table.work", "Вид работ")}</th>
                            <th>{t("priceList.table.unit", "Ед. изм.")}</th>
                            <th>{t("priceList.table.price", "Цена, ₽")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.rows.map((row, i) => (
                            <tr key={i}>
                              <td>{row.name}</td>
                              <td>{row.unit}</td>
                              <td className="price-list__price-cell">
                                {row.price}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── Note */}
          <p className="price-list__note">
            {t(
              "priceList.note",
              "* Цены носят ориентировочный характер и могут варьироваться в зависимости от проекта, применяемых материалов и удалённости объекта от Калининграда. Точные цены фиксируются в договоре и смете.",
            )}
          </p>

          {/* ── CTA */}
          <div className="order__btn-block">
            <OrderButton
              projectName={t("priceList.buttonProjectName", "Прайс-лист")}
              customTitle={t(
                "priceList.buttonTitle",
                "Запросить смету бесплатно",
              )}
              showFinish={false}
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
