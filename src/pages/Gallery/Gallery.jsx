import React, { useEffect, useState } from "react";
import ResponsiveImage from "../../components/ResponsiveImage";

const N = 42;
const names = Array.from({ length: N }, (_, i) => `gallery${i + 1}`);
const basePath = "/images/allphotoDomberg/gallery";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : names.length - 1));
  const showNext = () => setSelectedIndex((prev) => (prev + 1) % names.length);

  // Блокируем скролл под модалкой
  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [selectedIndex]);

  return (
    <div className="Ph__gallery">
      <h2 className="gallery__title">Галерея</h2>

      <div className="PP__image-grid">
        {names.map((name, index) => (
          <button
            key={name}
            className="gallery-item-btn"
            onClick={() => openModal(index)}
            aria-label={`Открыть ${name}`}
            style={{
              padding: 0,
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <ResponsiveImage
              folder="gallery"
              name={name}
              alt={`Gallery ${index + 1}`}
              className="gallery-img"
              // width/height лучше подставить реальные превью, чтобы избежать layout shift
              width={400}
              height={300}
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="modal"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <span
            className="modal-close"
            onClick={closeModal}
            aria-label="Закрыть"
          >
            &times;
          </span>

          <button
            className="modal-prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Предыдущее"
          >
            &#10094;
          </button>

          {/* В модалке отдаём крупный размер; есть webp и jpg фоллбек */}
          <picture onClick={(e) => e.stopPropagation()}>
            <source
              srcSet={`${basePath}/1200/${names[selectedIndex]}.webp`}
              type="image/webp"
            />
            <source
              srcSet={`${basePath}/1200/${names[selectedIndex]}.jpg`}
              type="image/jpeg"
            />
            <img
              src={`${basePath}/1200/${names[selectedIndex]}.jpg`}
              alt={`Enlarged ${names[selectedIndex]}`}
              className="modal-img"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          <button
            className="modal-next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Следующее"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
