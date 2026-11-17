import React, { useState, useEffect } from "react";
import OrderButton from "./OrderButton";
import ResponsiveImage from "../../components/ResponsiveImage";

const ProjectPage = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  const showNext = () =>
    setCurrentIndex((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="ProjectPage">
      {/* Главное изображение */}
      <div className="ProjectPage__section">
        <ResponsiveImage
          folder={data.folder}
          name={data.mainImageName}
          alt="Главное изображение"
          className="ProjectPage__image"
          width={1200}
          height={675}
          eager
        />
        <div className="PP__overlay-text">{data.title}</div>
      </div>

      {/* Описание */}
      <div className="ProjectPage__description">
        <div className="PP__d-column">
          {data.gridInfo.map((item, index) => (
            <div className="PP__d-grid-column" key={index}>
              <h4 className="PP__d-grid-title">{item.label}</h4>
              <p className="PP__d-grid-paragraph">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="PP__d-column-text">
          {data.description.map((p, index) => (
            <p className="PP__d-column-text-paragraph" key={index}>
              {p}
            </p>
          ))}
        </div>
      </div>

      {/* Галерея */}
      <div className="PP__image-grid">
        {data.images.map((imgName, index) => (
          <div className="PP__grid-item" key={index}>
            <ResponsiveImage
              folder={data.folder}
              name={imgName}
              alt={`Изображение ${index + 1}`}
              className="PP__image-grid-img"
              onClick={() => openModal(index)}
              style={{ cursor: "pointer" }}
              width={1200}
              height={675}
            />
          </div>
        ))}
      </div>

      <div className="order__btn-block">
        <OrderButton projectName={data.title} />
      </div>

      {/* Модалка */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>
          <button
            className="modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
          >
            &#10094;
          </button>
          <ResponsiveImage
            folder={data.folder}
            name={data.images[currentIndex]}
            alt={`modal-${currentIndex}`}
            className="modal-img"
            width={1200}
            height={675}
            eager
          />
          <button
            className="modal-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
