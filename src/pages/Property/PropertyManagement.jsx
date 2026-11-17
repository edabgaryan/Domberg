import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Seo from "../../seo/seo"; // ✅ твой путь
import ServicesBlock from "./ServicesBlock/ServicesBlock";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import OrderButton from "../Project/OrderButton";
import ResponsiveImage from "../../components/ResponsiveImage";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      {/* ✅ SEO */}
      <Seo
        title="Управление недвижимостью в Калининграде | Domberg — обслуживание и сопровождение"
        description="Профессиональное управление недвижимостью: страхование, сопровождение собственника, экстренные выезды, меблировка, приём платежей из-за рубежа, юридическая поддержка в Германии. Domberg — надёжный сервис в Калининграде."
        url="https://domberg39.ru/property-management"
        ogType="website"
        noindex={false}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Управление недвижимостью",
          provider: {
            "@type": "LocalBusiness",
            name: "Domberg",
            url: "https://domberg39.ru/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Калининград",
              addressCountry: "RU",
            },
            telephone: "+7-909-798-2752",
          },
          areaServed: "Kaliningrad",
          url: "https://domberg39.ru/property-management",
          description:
            "Комплексное управление недвижимостью в Калининграде: страхование, поддержка собственника, экстренные выезды, меблировка, приём зарубежных платежей, юрподдержка в Германии.",
        }}
      />

      <section className="about">
        <div className="about__welcome">
          <div className="about__w-box">
            <h2 className="w-box__title">{t("PropertyManagement.title")}</h2>
            <p className="w-box__paragraph">{t("PropertyManagement.p1")}</p>
            <p className="w-box__paragraph">{t("PropertyManagement.p2")}</p>
            <p className="w-box__paragraph">{t("PropertyManagement.p3")}</p>
          </div>
          <div className="about__w-img">
            <ResponsiveImage
              folder="propertyManagement"
              name="main-property"
              alt={t("propertyManagement.imageAlt")}
              className="ri-fluid"
            />
          </div>
        </div>

        <ServicesBlock />

        <section className="value">
          <div className="value__text">
            <h2 className="value__title">
              {t("PropertyManagement.servicesTitle")}
            </h2>
            <p className="value__paragraph">
              {t("PropertyManagement.servicesText")}
            </p>
          </div>

          <div className="value__container">
            <div className="value__column">
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.insurance.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.insurance.text")}
                </p>
              </div>
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.owner_support.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.owner_support.text")}
                </p>
              </div>
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.emergency.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.emergency.text")}
                </p>
              </div>
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.furnishing.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.furnishing.text")}
                </p>
              </div>
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.foreign_payment.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.foreign_payment.text")}
                </p>
              </div>
              <div className="value__c-item">
                <h3 className="value__c-star">*</h3>
                <h4 className="value__g-c-title">
                  {t("PropertyManagement.services.legal_support_germany.title")}
                </h4>
                <p className="value__g-c-paragraph">
                  {t("PropertyManagement.services.legal_support_germany.text")}
                </p>
              </div>
            </div>
          </div>

          <div className="order__btn-block">
            <OrderButton
              projectName="Управление недвижимостью"
              customTitle="Оставьте заявку на управление недвижимостью"
              showFinish={false}
            />
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}
