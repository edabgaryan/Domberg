import { useTranslation } from "react-i18next";

const Dom120Data = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.skandi120.title"),
    folder: "dom120", // папка с фото
    mainImageName: "120dom1", // главное фото (без расширения)
    gridInfo: [
      {
        label: t("projectpage.skandi120.grid.type"),
        value: t("projectpage.skandi120.grid.typeValue"),
      },
      {
        label: t("projectpage.skandi120.grid.status"),
        value: t("projectpage.skandi120.grid.statusValue"),
      },
      {
        label: t("projectpage.skandi120.grid.area"),
        value: t("projectpage.skandi120.grid.areaValue"),
      },
      {
        label: t("projectpage.skandi120.grid.price"),
        value: t("projectpage.skandi120.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.skandi120.desc.0"),
      t("projectpage.skandi120.desc.1"),
      t("projectpage.skandi120.desc.2"),
      t("projectpage.skandi120.desc.3"),
    ],
    images: ["120dom1", "120dom2", "120dom3", "120dom4", "120dom5"],
  };
};

export default Dom120Data;
