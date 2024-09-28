import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ItemEducation from "../item-education/item-education";
import ItemExperience from "../item-experience/item-experience";

interface Props {
  personalInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
  };
  education: {
    placeOfStudy: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  experience: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };
}
export default function ResumeContainer({
  personalInfo,
  education,
  experience,
}: Props) {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-header">
          <div className="name">{personalInfo.fullName}</div>

          <div className="contacts">
            <div className="email">
              <EmailIcon />
              <p>{personalInfo.email}</p>
            </div>
            <div className="phone">
              <LocalPhoneIcon />
              <p>{personalInfo.phoneNumber}</p>
            </div>

            <div className="location">
              <FmdGoodIcon /> <p>{personalInfo.address}</p>
            </div>
          </div>
        </div>

        <div className="resume-body">
          <div className="education">
            <h3 className="title">Education</h3>
            <ItemEducation education={education} />
          </div>

          <div className="experience">
            <h3 className="title">Professional Experience</h3>
            <ItemExperience experience={experience} />
          </div>
        </div>
      </div>
    </div>
  );
}
