import { useTranslation } from "react-i18next";

const useDom100Data = () => {
  const { t } = useTranslation();

  return {
    title: t("projectpage.Dom100.title"),
    folder: "line", // папка
    mainImageName: "line", // главное фото
    gridInfo: [
      {
        label: t("projectpage.Dom100.grid.type"),
        value: t("projectpage.Dom100.grid.typeValue"),
      },
      {
        label: t("projectpage.Dom100.grid.duration"),
        value: t("projectpage.Dom100.grid.durationValue"),
      },
      {
        label: t("projectpage.Dom100.grid.area"),
        value: t("projectpage.Dom100.grid.areaValue"),
      },
      {
        label: t("projectpage.Dom100.grid.price"),
        value: t("projectpage.Dom100.grid.priceValue"),
      },
    ],
    description: [
      t("projectpage.Dom100.desc.0"),
      t("projectpage.Dom100.desc.1"),
      t("projectpage.Dom100.desc.2"),
      t("projectpage.Dom100.desc.3"),
    ],
    images: ["line2", "line3", "line4", "line5", "line6", "line7", "line8"],
  };
};

export default useDom100Data;
