import React, { useEffect } from "react";
import ProjectPage from "../ProjectPage";
import useDom100Data from "./API/Dom100Data";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const Dom100 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = useDom100Data();

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default Dom100;
