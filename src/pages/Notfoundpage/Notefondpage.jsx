import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <motion.div
        className="notfound"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">
          {t('notfound.message')}
        </p>
        <Link to="/" className="notfound__button">
          {t('notfound.button')}
        </Link>
      </motion.div>
    </PageWrapper>
  );
};

export default NotFound;
