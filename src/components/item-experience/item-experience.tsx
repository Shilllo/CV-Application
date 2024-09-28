import * as React from "react";
export default function ItemExperience() {
  return (
    <div className="item-experience">
      <div className="experience-leftSide">
        <p className="experience-date">08/2020 – present</p>
        <p className="experience-location">New York City, US</p>
      </div>

      <div className="experience-rightSide">
        <p className="experience-place">Black Mesa Labs</p>
        <p className="experience-position">UX Research Assistant</p>
        <div className="experience-description">
          Supported senior researchers on accessibility standards for the open
          web. Created and usability tested wireframes and prototypes. Produced
          interactive documentation for quick onboarding of new researchers.
        </div>
      </div>
    </div>
  );
}
