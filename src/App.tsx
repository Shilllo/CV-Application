import * as React from "react";

import "./App.css";
import EditSide from "./components/edit-side/edit-side";
import ResumeContainer from "./components/resume-container/resume-container";
import { createTheme } from "@mui/material/styles";

function App() {
  const [personalInfo, setPersonalInfo] = React.useState({
    fullName: "John Doe",
    email: "jondoe@me.com",
    phoneNumber: "+79835434567",
    address: "St. Petersburg, Russia",
  });

  const handleInputChangePersonal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const [education, setEducation] = React.useState([
    {
      placeOfStudy: "MSU",
      degree: "Applied Mathematics",
      startDate: "2020-08-29",
      endDate: "2024-08-29",
      location: "Moscow, Russia",
    },
  ]);

  const handleInputChangeEducation = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setEducation(() => {
      const updatedEducation = [...education];

      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value,
      };

      return updatedEducation;
    });
  };

  const [experience, setExperience] = React.useState([
    {
      companyName: "Yandex",
      position: "Junior Frontend Developer",
      startDate: "2022-08-29",
      endDate: "now",
      location: "St. Petersburg, Russia",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ]);

  const handleInputChangeExperience = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setExperience(() => {
      const updatedExperience = [...experience];

      updatedExperience[index] = {
        ...updatedExperience[index],
        [name]: value,
      };

      return updatedExperience;
    });
  };

  return (
    <div className="App">
      <main className="App-main">
        <EditSide
          handleInputChangePersonal={handleInputChangePersonal}
          personalInfo={personalInfo}
          handleInputChangeEducation={handleInputChangeEducation}
          education={education}
          handleInputChangeExperience={handleInputChangeExperience}
          experience={experience}
          setPersonalInfo={setPersonalInfo}
          setEducation={setEducation}
          setExperience={setExperience}
        />
        <ResumeContainer
          personalInfo={personalInfo}
          education={education}
          experience={experience}
        />
        {/* <p>{{ resume.fullName }}</p> */}
      </main>
    </div>
  );
}

export default App;
