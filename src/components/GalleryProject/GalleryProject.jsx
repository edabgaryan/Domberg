import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imagesData from "../../assets/API/ApiGalleryProject.json";
import ResponsiveImage from "../../components/ResponsiveImage";

const GalleryProject = () => {
  const { t } = useTranslation();

  return (
    <div className="gallery">
      {imagesData.map((image) => (
        <Link key={image.id} to={image.path} className="gallery__block">
          <ResponsiveImage
            folder="project"
            name={image.photo} // ✅ берём имя из JSON
            alt={image.alt || t("project.imageAlt")}
            className="gallery__img"
          />
          <div className="gallery__overlay-block">
            <div className="gallery__overlay-price">
              <div className="gallery__overlay__price-text">
                {t(`GalleryProject.${image.key}.price`)}
              </div>
            </div>
            <div className="gallery__overlay">
              <div className="gallery__overlay-text">
                {t(`GalleryProject.${image.key}.description`)}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryProject;
