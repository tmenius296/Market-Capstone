import React from "react";
import "./formStyles.css";

export default function MissionStatement({ formData, setFormData }) {
  return (
    <div className="mission-container">
      <p className="tip-paragraph">
        A mission statement is just that; a clear, concise statement summing up
        your goals. Below, enter a 1-2 sentence that will serve as the mission
        statement for your custom marketing plan.
      </p>
      <textarea
        className="mission-input"
        type="paragraph"
        placeholder="Enter your mission statement here"
        value={formData.mission}
        onChange={(event) =>
          setFormData({ ...formData, mission: event.target.value })
        }
      ></textarea>
    </div>
  );
}
