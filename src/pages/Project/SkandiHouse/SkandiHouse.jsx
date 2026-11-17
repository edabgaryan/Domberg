import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import SkandiHouseData from './API/SkandiHouseData'; // заменили на хук
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const SkandiHouse = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = SkandiHouseData(); // вызов хука

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default SkandiHouse;
