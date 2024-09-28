import * as React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";

interface Props {
  personalInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
  };
  handleInputChangePersonal: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  education: {
    placeOfStudy: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
  };
  handleInputChangeEducation: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  experience: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  };
  handleInputChangeExperience: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  setPersonalInfo: (personalInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
  }) => void;
  setEducation: (education: {
    placeOfStudy: string;
    degree: string;
    startDate: string;
    endDate: string;
    location: string;
  }) => void;
  setExperience: (experience: {
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    description: string;
  }) => void;
}
export default function EditSide({
  handleInputChangePersonal,
  personalInfo,
  handleInputChangeEducation,
  education,
  handleInputChangeExperience,
  experience,
  setPersonalInfo,
  setEducation,
  setExperience,
}: Props) {
  return (
    <div className="edit-side">
      <div className="sidebar">
        <Button>
          <DescriptionOutlined />
          <p>Content</p>
        </Button>
        <Button>
          <DashboardCustomizeIcon />
          <p>Cusomize</p>
        </Button>
      </div>
      <div className="form-container">
        <div className="clear-load">
          <Button
            onClick={() => {
              setPersonalInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              });
              setEducation({
                placeOfStudy: "",
                degree: "",
                startDate: "",
                endDate: "",
                location: "",
              });
              setExperience({
                companyName: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: "",
              });
            }}
          >
            <DeleteIcon />
            <p>Clear Resume</p>
          </Button>
          <Button onClick={() => window.location.reload()}>
            <DownloadIcon />
            <p>Load Example</p>
          </Button>
        </div>
        <div className="personal-info-form ">
          <Accordion className="Mui-expanded">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Personal Details</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className="form">
                <label htmlFor="full-name">Full name</label>
                <input
                  type="text"
                  id="full-name"
                  name="fullName"
                  placeholder="First and last name"
                  value={personalInfo.fullName}
                  onChange={handleInputChangePersonal}
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={personalInfo.email}
                  onChange={handleInputChangePersonal}
                />
                <label htmlFor="phone">Phone number</label>
                <input
                  type="text"
                  id="phone"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={personalInfo.phoneNumber}
                  onChange={handleInputChangePersonal}
                />
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Enter address"
                  value={personalInfo.address}
                  onChange={handleInputChangePersonal}
                />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="education-form">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Education</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className="form">
                <label htmlFor="place-of-study">Place of study</label>
                <input
                  type="text"
                  id="place-of-study"
                  name="placeOfStudy"
                  placeholder="Enter place of study"
                  value={education.placeOfStudy}
                  onChange={handleInputChangeEducation}
                />
                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  placeholder="Enter degree"
                  value={education.degree}
                  onChange={handleInputChangeEducation}
                />
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="startDate"
                  placeholder="Enter start date"
                  value={education.startDate}
                  onChange={handleInputChangeEducation}
                />
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="endDate"
                  value={education.endDate}
                  placeholder="Enter end date"
                  onChange={handleInputChangeEducation}
                />
                <label htmlFor="Location">Location</label>
                <input
                  type="text"
                  id="Location"
                  name="location"
                  placeholder="Enter location"
                  value={education.location}
                  onChange={handleInputChangeEducation}
                />
              </div>

              <button className="addEducation">+ Education</button>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="experience-form">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3>Experience</h3>
            </AccordionSummary>
            <AccordionDetails>
              <div className="form">
                <label htmlFor="company-name">Company Name</label>
                <input
                  type="text"
                  id="company-name"
                  name="companyName"
                  placeholder="Enter company name"
                  value={experience.companyName}
                  onChange={handleInputChangeExperience}
                />
                <label htmlFor="postition-title">Position Title</label>
                <input
                  type="text"
                  id="postition-title"
                  name="position"
                  placeholder="Enter position title"
                  value={experience.position}
                  onChange={handleInputChangeExperience}
                />
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="startDate"
                  placeholder="Enter start date"
                  value={experience.startDate}
                  onChange={handleInputChangeExperience}
                />
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="endDate"
                  placeholder="Enter end date"
                  value={experience.endDate}
                  onChange={handleInputChangeExperience}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  value={experience.location}
                  onChange={handleInputChangeExperience}
                />
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  // rows={4}
                  // cols={50}
                  name="description"
                  placeholder="Enter description"
                  value={experience.description}
                  onChange={handleInputChangeExperience}
                />
              </div>

              <button className="addExperience">+ Experience</button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
