import * as React from "react";
interface Props {
  experience: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };
}
export default function ItemExperience({ experience }: Props) {
  return (
    <div className="item-experience">
      <div className="experience-leftSide">
        <p className="experience-date">
          {experience.startDate} – {experience.endDate}
        </p>
        <p className="experience-location">{experience.location}</p>
      </div>

      <div className="experience-rightSide">
        <p className="experience-place">{experience.companyName}</p>
        <p className="experience-position">{experience.position}</p>
        <div className="experience-description">{experience.description}</div>
      </div>
    </div>
  );
}
