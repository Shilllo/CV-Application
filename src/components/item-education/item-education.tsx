import * as React from "react";

interface Props {
  education: {
    placeOfStudy: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
  };
}
export default function ItemEducation({ education }: Props) {
  return (
    <div className="item-education">
      <div className="education-leftSide">
        <p className="education-date">
          {education.startDate} – {education.endDate}
        </p>
        <p className="education-location">{education.location}</p>
      </div>

      <div className="education-rightSide">
        <p className="education-place">{education.placeOfStudy}</p>
        <p className="education-degree">{education.degree}</p>
      </div>
    </div>
  );
}
