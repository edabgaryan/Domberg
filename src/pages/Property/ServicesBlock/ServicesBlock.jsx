import React from "react";
import { useTranslation } from "react-i18next";
import teamMembersData from "../../../assets/API/ApiTeamMembers.json";
import ResponsiveImage from "../../../components/ResponsiveImage";

const ServicesBlock = () => {
  const { t } = useTranslation();

  const translatedMembers = t("servicesBlock.members", { returnObjects: true });

  const teamMembers = teamMembersData.map((member, index) => ({
    ...member,
    name: translatedMembers[index]?.name || member.name,
    role: translatedMembers[index]?.role || member.role,
  }));

  return (
    <div className="about__team">
      <h2 className="team__title">{t("servicesBlock.title")}</h2>
      <div className="team__container">
        {teamMembers.map((member, index) => (
          <div className="team__member" key={index}>
            <div className="member__photo-container">
              <ResponsiveImage
                folder="propertyManagement"
                name={member.photo}
                alt={t("propertyManagement.imageAlt")}
                className="member__photo"
                loading="lazy"
              />
            </div>
            <div className="member__text">
              <h3 className="member__name">{member.name}</h3>
              <p className="member__role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBlock;
