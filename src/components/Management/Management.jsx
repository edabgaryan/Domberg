import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import useScrollDirection from './hooks/useScrollDirection';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ManagementStep = ({ step, delay }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });
  const scrollDirection = useScrollDirection();
  const { t } = useTranslation();

  React.useEffect(() => {
    if (inView && scrollDirection === 'down') {
      controls.start('visible');
    }
  }, [inView, controls, scrollDirection]);

  return (
    <motion.div
      ref={ref}
      className="column__right-box"
      variants={fadeUp}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
    >
      <h3 className='right__box-num'>{step.num}</h3>
      <h3 className='right__box-title'>{t(`management.steps.${step.key}.title`)}</h3>
      <p className='right__box-paragraph'>{t(`management.steps.${step.key}.text`)}</p>
    </motion.div>
  );
};

const managementSteps = [
  { num: '01', key: 'consult' },
  { num: '02', key: 'design' },
  { num: '03', key: 'contract' },
  { num: '04', key: 'build' },
  { num: '05', key: 'handover' }
];

const Management = () => {
  const { t } = useTranslation();

  return (
    <div className="management">
      <div className="management__column-left">
        <h2 className='column__left-title'>{t('management.title')}</h2>
        <p className='column__left-paragraph'>
          {t('management.description')}
        </p>
        <Link to="/about" className="management__btn">
          {t('management.aboutButton')}
        </Link>
      </div>

      <div className="management__column-right">
        {managementSteps.map((step, i) => (
          <ManagementStep key={step.num} step={step} delay={i * 0.2} />
        ))}
      </div>
    </div>
  );
};

export default Management;
