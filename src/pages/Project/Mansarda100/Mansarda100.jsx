import React, { useEffect } from "react";
import ProjectPage from "../ProjectPage";
import Mansarda100Data from "./API/Mansarda100Data"; // ✅ подключаем хук
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const Mansarda100 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = Mansarda100Data(); // ✅ вызываем хук

  return (
    <PageWrapper>
      <ProjectPage data={data} />
    </PageWrapper>
  );
};

export default Mansarda100;
