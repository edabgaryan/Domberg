import React, { useEffect } from 'react';
import ProjectPage from '../ProjectPage';
import HiTech90Data from './API/HiTech90Data'; // поменял на хук
import PageWrapper from '../../../components/PageWrapper/PageWrapper';

const HiTech90 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = HiTech90Data(); // вызов хука

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default HiTech90;
