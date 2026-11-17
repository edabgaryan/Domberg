import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <section className="privacy-policy">
        <div className="privacy-policy__container">
          <h1>{t('privacy.title')}</h1>
          <p>{t('privacy.intro')}</p>

          <h2>1. {t('privacy.section1.title')}</h2>
          <p>{t('privacy.section1.text')}</p>

          <h2>2. {t('privacy.section2.title')}</h2>
          <p>{t('privacy.section2.text')}</p>

          <h2>3. {t('privacy.section3.title')}</h2>
          <ul>
            {t('privacy.section3.list', { returnObjects: true }).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          <h2>4. {t('privacy.section4.title')}</h2>
          <p>{t('privacy.section4.text')}</p>

          <h2>5. {t('privacy.section5.title')}</h2>
          <p>{t('privacy.section5.text')}</p>

          <h2>6. {t('privacy.section6.title')}</h2>
          <p>{t('privacy.section6.text')}</p>

          <h2>7. {t('privacy.section7.title')}</h2>
          <p>{t('privacy.section7.text')}</p>

          <h2>8. {t('privacy.section8.title')}</h2>
          <p>
            {t('privacy.section8.text')}{' '}
            <a href="mailto:skstroy39@gmail.com">skstroy39@gmail.com</a>
          </p>

          <h2>9. {t('privacy.section9.title')}</h2>
          <p>{t('privacy.section9.text')}</p>

          <h2>10. {t('privacy.section10.title')}</h2>
          <p>
            📧 skstroy39@gmail.com<br />
            📞 +7 (909) 798-27-52
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
