import React, { useState } from "react";

export default function Strengths({ formData, setFormData }) {
  let [currentValue, setCurrentValue] = useState("");

  return (
    <div>
      <p className="tip-paragraph">
        Does your customer service set you apart from the competition? Do you
        have a veteran sales team with decades of combined experience? Below,
        list 2-3 unique strengths that will aid your organization in
        accomplishing its mission.{" "}
      </p>
      <input
        className="monoline-input"
        type="text"
        id="strengths"
        placeholder="Strengths"
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
      ></input>

      <input
        type="button"
        value="add to list"
        id="add"
        onClick={(e) =>
          setFormData({
            ...formData,
            strengths: [...formData.strengths, currentValue],
          })
        }
      ></input>
      <ul>
        {formData.strengths.map((strength) => (
          <li>{strength}</li>
        ))}
      </ul>
    </div>
  );
}
