import { useTranslation } from "react-i18next";

const Mansarda100Data = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.Mansarda100.title"),
    folder: "120mans",
    mainImageName: "120mans", // главное фото
    gridInfo: [
      {
        label: t("projectpage.Mansarda100.grid.type"),
        value: t("projectpage.Mansarda100.grid.typeValue"),
      },
      {
        label: t("projectpage.Mansarda100.grid.duration"),
        value: t("projectpage.Mansarda100.grid.durationValue"),
      },
      {
        label: t("projectpage.Mansarda100.grid.area"),
        value: t("projectpage.Mansarda100.grid.areaValue"),
      },
      {
        label: t("projectpage.Mansarda100.grid.price"),
        value: t("projectpage.Mansarda100.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.Mansarda100.desc.0"),
      t("projectpage.Mansarda100.desc.1"),
      t("projectpage.Mansarda100.desc.2"),
      t("projectpage.Mansarda100.desc.3"),
      t("projectpage.Mansarda100.desc.4"),
    ],
    images: ["120mans1", "120mans2", "120mans3", "120mans4", "120mans5"],
  };
};

export default Mansarda100Data;
