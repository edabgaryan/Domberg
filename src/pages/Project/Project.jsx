import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import GalleryProject from '../../components/GalleryProject/GalleryProject';
import PageWrapper from '../../components/PageWrapper/PageWrapper';

export default function AboutValue() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <section className='project'>
        <h2 className='project__title'>{t('project.title')}</h2>
        <GalleryProject />
      </section>
    </PageWrapper>
  );
}
