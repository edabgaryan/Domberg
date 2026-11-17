import { useTranslation } from "react-i18next";

const SkandiHouse2Data = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.SkandiHouse2.title"),
    folder: "skand100", // папка с фото
    mainImageName: "skand1", // главное фото
    gridInfo: [
      {
        label: t("projectpage.SkandiHouse2.grid.type"),
        value: t("projectpage.SkandiHouse2.grid.typeValue"),
      },
      {
        label: t("projectpage.SkandiHouse2.grid.duration"),
        value: t("projectpage.SkandiHouse2.grid.durationValue"),
      },
      {
        label: t("projectpage.SkandiHouse2.grid.area"),
        value: t("projectpage.SkandiHouse2.grid.areaValue"),
      },
      {
        label: t("projectpage.SkandiHouse2.grid.price"),
        value: t("projectpage.SkandiHouse2.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.SkandiHouse2.desc.0"),
      t("projectpage.SkandiHouse2.desc.1"),
      t("projectpage.SkandiHouse2.desc.2"),
      t("projectpage.SkandiHouse2.desc.3"),
    ],
    images: ["skand2", "skand3", "skand4", "skand5"],
  };
};

export default SkandiHouse2Data;
