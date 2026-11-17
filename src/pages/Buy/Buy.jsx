import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import Calc from '../Calc/Calc';

const Buy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const options = [
    {
      key: 'cash',
    },
    {
      key: 'mortgage',
    },
    {
      key: 'consumer',
    },
    {
      key: 'matcapital',
    },
  ];

  return (
    <PageWrapper>
      <div className="buy">
        <Calc />
        <div className="buy__main-text">
          <h1 className="buy__title">{t('buy.title')}</h1>
          <p className="buy__subtitle">{t('buy.subtitle')}</p>
        </div>
        <div className="buy__options">
          {options.map((option, index) => (
            <div key={index} className="buy__option-block">
              <h3 className="buy__option-title">{t(`buy.options.${option.key}.title`)}</h3>
              <ul className="buy__option-description">
                {t(`buy.options.${option.key}.description`, { returnObjects: true }).map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="buy__ipoteka">
          <div className="buy__main-text">
            <h2 className="buy__title">{t('buy.sber.title')}</h2>
            <p className="buy__subtitle">{t('buy.sber.subtitle')}</p>
          </div>

          <div className="buy__ipoteka-block">
            <iframe
              className="buy__ipoteka__iframe"
              src="https://ipoteka.domclick.ru/calc-reg/calculator.html?prod=5&cost=4710000&dep=30"
              width="100%"
              height="1600"
              frameBorder="0"
              title="SberbankIpoteka"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Buy;
