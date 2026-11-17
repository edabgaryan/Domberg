import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouse2Data from './API/SkandiHouse2Data'; // подключаем хук
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const SkandiHouse2 = () => {
  useEffect(() => {
    // Когда компонент монтируется, прокручиваем страницу к верху
    window.scrollTo(0, 0);
  }, []);

  const data = SkandiHouse2Data(); // вызываем хук

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default SkandiHouse2;
