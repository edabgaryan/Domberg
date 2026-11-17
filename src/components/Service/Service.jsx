import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import data from "../../assets/API/ApiService.json";
import ResponsiveImage from "../../components/ResponsiveImage";

const Service = () => {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Загружаем переводимые ключи из JSON
    const translatedData = data.map((item) => ({
      ...item,
      title: t(`service.items.${item.key}.title`),
      description: t(`service.items.${item.key}.description`),
    }));

    setItems(translatedData);

    if (translatedData.length > 0) {
      setSelectedItem(translatedData[0]);
    }
  }, [t, i18n.language]);

  const handleButtonClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="service">
      <h2 className="service__title">{t("service.title")}</h2>
      <div className="service__container">
        {items.map((item, index) => (
          <div
            className={`service__container-btn ${
              selectedItem && selectedItem.title === item.title ? "active" : ""
            }`}
            key={index}
            onClick={() => handleButtonClick(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="service__display">
          <ResponsiveImage
            loading="lazy"
            folder="service"
            name={selectedItem.image}
            alt={t("service.imageAlt")}
            className="service__display-img"
          />
          <div className="service__display-text-overlay">
            {selectedItem.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Service;
