import { useTranslation } from "react-i18next";

const HiTech90Data = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.HiTech90.title"),
    folder: "hitech90", // название папки с фото
    mainImageName: "hitech1", // главное фото
    gridInfo: [
      {
        label: t("projectpage.HiTech90.grid.type"),
        value: t("projectpage.HiTech90.grid.typeValue"),
      },
      {
        label: t("projectpage.HiTech90.grid.duration"),
        value: t("projectpage.HiTech90.grid.durationValue"),
      },
      {
        label: t("projectpage.HiTech90.grid.area"),
        value: t("projectpage.HiTech90.grid.areaValue"),
      },
      {
        label: t("projectpage.HiTech90.grid.price"),
        value: t("projectpage.HiTech90.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.HiTech90.desc.0"),
      t("projectpage.HiTech90.desc.1"),
      t("projectpage.HiTech90.desc.2"),
      t("projectpage.HiTech90.desc.3"),
    ],
    images: ["hitech2", "hitech3", "hitech4", "hitech5"],
  };
};

export default HiTech90Data;
