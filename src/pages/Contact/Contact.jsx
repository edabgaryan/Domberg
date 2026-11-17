import React, { useState, useEffect } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import Seo from "../../seo/seo"; // ✅ SEO

export default function Contact() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendToTelegram = async () => {
    const token = "8131952488:AAH-IIRF36HAK5qffuq6RNLmvVwYi8xKkQM";
    const chat_id = "531185935";
    const text = `
📩 Новая заявка с сайта DOMBERG:

👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Комментарий: ${message || "—"}
  `;
    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text, parse_mode: "Markdown" }),
      });
      console.log("✅ Заявка отправлена в Telegram");
    } catch (error) {
      console.error("❌ Ошибка Telegram:", error);
    }
  };

  const sendToGoogleForm = async () => {
    const formData = new FormData();
    formData.append("entry.1880084898", name);
    formData.append("entry.1441944693", phone);
    formData.append("entry.622903486", message);
    formData.append("entry.660202342", "Контакты");
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdcjDUDqffZfFqsrKdw305enRiv6rGT1pwCGzRXr9vxTt8_2Q/formResponse",
        { method: "POST", mode: "no-cors", body: formData }
      );
      console.log("✅ Заявка отправлена в Google Форму");
    } catch (error) {
      console.error("❌ Ошибка Google Формы:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      alert(
        t("contact.form.nameError") || "Имя должно содержать минимум 2 буквы"
      );
      return;
    }
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 5) {
      alert(
        t("contact.form.phoneError") ||
          "Телефон должен содержать минимум 5 цифр"
      );
      return;
    }
    if (!message.trim()) {
      alert(t("contact.form.messageError") || "Пожалуйста, введите сообщение");
      return;
    }
    sendToTelegram();
    sendToGoogleForm();
    setName("");
    setPhone("");
    setMessage("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <PageWrapper>
      {/* ✅ SEO для страницы Контакты */}
      <Seo
        title="Контакты Domberg — строительство домов в Калининграде"
        description="Свяжитесь с Domberg: строительство домов под ключ в Калининграде и области. Телефон +7 909 779 25 80, почта domberg39@gmail.com. Ответим на вопросы и поможем с проектом."
        url="https://domberg39.ru/contact"
        ogType="website"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Контакты Domberg",
          url: "https://domberg39.ru/contact",
          mainEntity: {
            "@type": "LocalBusiness",
            name: "Domberg",
            url: "https://domberg39.ru/",
            email: "domberg39@gmail.com",
            telephone: "+7-909-779-25-80",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Калининград",
              addressCountry: "RU",
            },
            sameAs: [
              "https://instagram.com/domberg39",
              "https://t.me/domberg39",
            ],
          },
        }}
      />

      <section className="contact">
        <h2 className="contact__title">{t("contact.title")}</h2>
        <div className="contact-page container">
          <div className="contact-page__body">
            <div className="contact-p-b-box">
              <a className="paragraph contact-page__paragraph">
                {t("contact.company")}
              </a>
              <a className="paragraph contact-page__paragraph">
                {t("contact.companyName")}
              </a>
              <a
                href="tel:+79097982752"
                className="paragraph contact-page__paragraph"
              >
                +7 909 798 27 52
              </a>
              <a
                className="paragraph contact-page__paragraph"
                href="mailto:domberg39@gmail.com"
              >
                domberg39@gmail.com
              </a>
            </div>

            <div className="contact__item-list">
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact-f__input">
                  <input
                    placeholder={t("contact.form.name")}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="contact__form-input"
                  />
                  <input
                    placeholder={t("contact.form.phonePlaceholder")}
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="contact__form-input"
                  />
                </div>
                <textarea
                  placeholder={t("contact.form.message")}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="contact__form-textarea"
                />
                <button type="submit" className="contact__form-button">
                  {t("contact.form.button")}
                </button>
                <p className="privacy-notice">
                  {t("contact.form.privacy")}{" "}
                  <a
                    href="/PrivacyPolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("contact.form.policy")}
                  </a>
                  .
                </p>
              </form>

              {success && (
                <div className="success-popup">
                  <p>{t("contact.form.success")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
