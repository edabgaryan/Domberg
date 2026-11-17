import React, { useEffect } from "react";
import ProjectPage from "../ProjectPage";
import Dom120Data from "./API/Dom120Data";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const Dom120 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = Dom120Data();

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default Dom120;
