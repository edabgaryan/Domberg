import React, { useEffect, useState, useRef } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function HeaderSocials({ onClickMenu, onCloseMenu }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem("lang") || "ru");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang, i18n]);

  // Закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="header-socials-lang">
      <ul className="header__socials">
        <li className="h-socials__item">
          <a
            href="https://t.me/DOMBERG39"
            rel="noreferrer"
            target="_blank"
            aria-label="Telegram"
          >
            <FaTelegramPlane color="#333" className="h-socials__link" />
          </a>
        </li>
        <li className="h-socials__item">
          <a
            href="https://api.whatsapp.com/send/?phone=79097982752"
            rel="noreferrer"
            target="_blank"
            aria-label="WhatsApp"
          >
            <IoLogoWhatsapp color="#333" className="h-socials__link" />
          </a>
        </li>

        {/* Выпадающий список языка */}
        <li className="h-socials__item lang-dropdown" ref={dropdownRef}>
          <button className="lang-toggle" onClick={() => setOpen(!open)}>
            {lang.toUpperCase()} ▾
          </button>
          {open && (
            <ul className="lang-menu">
              <li
                onClick={() => {
                  setLang("ru");
                  setOpen(false);
                }}
              >
                RU
              </li>
              <li
                onClick={() => {
                  setLang("en");
                  setOpen(false);
                }}
              >
                EN
              </li>
              <li
                onClick={() => {
                  setLang("de");
                  setOpen(false);
                }}
              >
                DE
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div
        onClick={() => onCloseMenu(!onClickMenu)}
        className={
          onClickMenu ? "header__open-menu active" : "header__open-menu"
        }
      >
        <span></span>
      </div>
    </div>
  );
}
