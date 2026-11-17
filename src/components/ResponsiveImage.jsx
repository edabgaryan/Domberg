// components/ResponsiveImage.jsx
export default function ResponsiveImage({
  folder,
  name,
  alt = "",
  className,
  width,
  height,
  eager = false,
}) {
  const basePath = `/images/allphotoDomberg/${folder}`;

  return (
    <picture>
      {/* webp — приоритетный (самый лёгкий) */}
      <source
        srcSet={`
          ${basePath}/480/${name}.webp 480w,
          ${basePath}/768/${name}.webp 768w,
          ${basePath}/1200/${name}.webp 1200w
        `}
        type="image/webp"
        sizes="(max-width: 768px) 100vw, 1200px"
      />

      {/* jpg */}
      <source
        srcSet={`
          ${basePath}/480/${name}.jpg 480w,
          ${basePath}/768/${name}.jpg 768w,
          ${basePath}/1200/${name}.jpg 1200w
        `}
        type="image/jpeg"
        sizes="(max-width: 768px) 100vw, 1200px"
      />

      {/* png */}
      <source
        srcSet={`
          ${basePath}/480/${name}.png 480w,
          ${basePath}/768/${name}.png 768w,
          ${basePath}/1200/${name}.png 1200w
        `}
        type="image/png"
        sizes="(max-width: 768px) 100vw, 1200px"
      />

      {/* fallback — обычный <img> (если браузер не поддерживает <picture>) */}
      <img
        src={`${basePath}/1200/${name}.jpg`}
        alt={alt}
        className={className}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        width={width}
        height={height}
      />
    </picture>
  );
}
