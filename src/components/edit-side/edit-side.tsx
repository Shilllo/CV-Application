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
export default function EditSide() {
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
          <Button>
            <DeleteIcon />
            <p>Clear Resume</p>
          </Button>
          <Button>
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
                <input type="text" id="full-name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="phone">Phone number</label>
                <input type="tel" id="phone" />
                <label htmlFor="address">Address</label>
                <input type="text" id="address" />
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
                <input type="text" id="place-of-study" />
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" />
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" />
                <label htmlFor="end-date">End Date</label>
                <input type="date" id="end-date" />
                <label htmlFor="Location">Location</label>
                <input type="text" id="Location" />
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
                <input type="text" id="company-name" />
                <label htmlFor="postition-title">Position Title</label>
                <input type="text" id="postition-title" />
                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" />
                <label htmlFor="end-date">End Date</label>
                <input type="date" id="end-date" />
                <label htmlFor="location">Location</label>
                <input type="text" id="location" />
                <label htmlFor="description">Description</label>
                <textarea id="description" rows={4} cols={50} />
              </div>

              <button className="addExperience">+ Experience</button>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
