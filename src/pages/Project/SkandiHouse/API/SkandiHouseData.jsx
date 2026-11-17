import { useTranslation } from "react-i18next";

const SkandiHouseData = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.SkandiHouse.title"),
    folder: "skandi160", // название папки с фото
    mainImageName: "skandi1", // главное фото (без расширения)
    gridInfo: [
      {
        label: t("projectpage.SkandiHouse.grid.type"),
        value: t("projectpage.SkandiHouse.grid.typeValue"),
      },
      {
        label: t("projectpage.SkandiHouse.grid.duration"),
        value: t("projectpage.SkandiHouse.grid.durationValue"),
      },
      {
        label: t("projectpage.SkandiHouse.grid.area"),
        value: t("projectpage.SkandiHouse.grid.areaValue"),
      },
      {
        label: t("projectpage.SkandiHouse.grid.price"),
        value: t("projectpage.SkandiHouse.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.SkandiHouse.desc.0"),
      t("projectpage.SkandiHouse.desc.1"),
      t("projectpage.SkandiHouse.desc.2"),
      t("projectpage.SkandiHouse.desc.3"),
    ],
    images: ["skandi2", "skandi3", "skandi4", "skandi5"],
  };
};

export default SkandiHouseData;
