import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ItemEducation from "../item-education/item-education";
import ItemExperience from "../item-experience/item-experience";
export default function ResumeContainer() {
  return (
    <div className="resume-container">
      <div className="resume">
        <div className="resume-header">
          <div className="name">Jonh Smith</div>

          <div className="contacts">
            <div className="phone">
              <LocalPhoneIcon />
              <p>+7 999 999 99 99</p>
            </div>
            <div className="email">
              <EmailIcon />
              <p>Jonh.smith@gmail.com</p>
            </div>
            <div className="location">
              <FmdGoodIcon /> <p>Moscow, Russia</p>
            </div>
          </div>
        </div>

        <div className="resume-body">
          <div className="education">
            <h3 className="title">Education</h3>
            <ItemEducation />
          </div>

          <div className="experience">
            <h3 className="title">Professional Experience</h3>
            <ItemExperience />
          </div>
        </div>
      </div>
    </div>
  );
}
