import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function MaterialCostCalculator() {
  const { t } = useTranslation();
  const [material, setMaterial] = useState('Газосиликатный блок');
  const [foundation, setFoundation] = useState('Плитный');
  const [floors, setFloors] = useState('1+мансарда');
  const [ceiling, setCeiling] = useState('Монолитные');
  const [area, setArea] = useState(150);
  const [result, setResult] = useState(null);

  const getMaterialPrice = () => {
    switch (material) {
      case 'Газосиликатный блок': return 35000;
      case 'Кирпич': return 42000;
      case 'Пеноблок': return 38000;
      default: return 35000;
    }
  };

  const getFoundationPrice = () => {
    const foundationPrice = {
      'Плитный': 600000,
      'Ленточный': 450000,
      'Свайный': 300000
    };
    return foundationPrice[foundation] || 0;
  };

  const getCeilingUnitPrice = () => {
    const floorsPrice = {
      'Монолитные': 400000,
      'Деревянные': 200000,
      'Ж/Б плиты': 200000
    };
    return floorsPrice[ceiling] || 0;
  };

  const getFloorCoefficient = () => {
    const storeyMultiplier = {
      '1 этаж': 1,
      '1+мансарда': 1.3,
      '2 этажа': 1.6,
      '2+мансарда': 1.9,
      '3 этаж': 2.2
    };
    return storeyMultiplier[floors] || 1.0;
  };

  const getStoreyCount = () => {
    const storeyCounts = {
      '1 этаж': 1,
      '1+мансарда': 2,
      '2 этажа': 2,
      '2+мансарда': 3,
      '3 этаж': 3
    };
    return storeyCounts[floors] || 1;
  };

  const handleCalculate = () => {
    const materialPrice = getMaterialPrice();
    const foundationPrice = getFoundationPrice();
    const ceilingUnitPrice = getCeilingUnitPrice();
    const floorCoef = getFloorCoefficient();
    const storeyCount = getStoreyCount();

    const wallsCost = area * materialPrice * floorCoef;
    const ceilingPrice = (storeyCount - 1) * ceilingUnitPrice;
    const total = wallsCost + foundationPrice + ceilingPrice;

    setResult({ total });
  };

  return (
    <div className="calculator">
      <h2 className="calculator__title">{t("calc.title")}</h2>

      <div className="calculator__field">
        <label className="calculator__label">{t("calc.materialLabel")}</label>
        <select className="calculator__select" value={material} onChange={(e) => setMaterial(e.target.value)}>
          <option>{t("calc.material1")}</option>
          <option>{t("calc.material2")}</option>
          <option>{t("calc.material3")}</option>
        </select>
      </div>

      <div className="calculator__field">
        <label className="calculator__label">{t("calc.foundationLabel")}</label>
        <select className="calculator__select" value={foundation} onChange={(e) => setFoundation(e.target.value)}>
          <option>{t("calc.foundation1")}</option>
          <option>{t("calc.foundation2")}</option>
          <option>{t("calc.foundation3")}</option>
        </select>
      </div>

      <div className="calculator__field">
        <label className="calculator__label">{t("calc.ceilingLabel")}</label>
        <select className="calculator__select" value={ceiling} onChange={(e) => setCeiling(e.target.value)}>
          <option>{t("calc.ceiling1")}</option>
          <option>{t("calc.ceiling2")}</option>
          <option>{t("calc.ceiling3")}</option>
        </select>
      </div>

      <div className="calculator__field">
        <label className="calculator__label">{t("calc.floorLabel")}</label>
        <select className="calculator__select" value={floors} onChange={(e) => setFloors(e.target.value)}>
          <option>{t("calc.floor1")}</option>
          <option>{t("calc.floor2")}</option>
          <option>{t("calc.floor3")}</option>
          <option>{t("calc.floor4")}</option>
          <option>{t("calc.floor5")}</option>
        </select>
      </div>

      <div className="calculator__field">
        <label className="calculator__label">{t("calc.areaLabel")}</label>
        <input
          type="number"
          className="calculator__input"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          min={20}
        />
      </div>

      <button className="calculator__button" onClick={handleCalculate}>
        {t("calc.button")}
      </button>

      {result && (
        <div className="calculator__result">
          <p className="calculator__result-label">
            <strong>{t("calc.resultLabel")}</strong>
          </p>
          <div className="calculator__price">{result.total.toLocaleString()} ₽</div>
        </div>
      )}
    </div>
  );
}
