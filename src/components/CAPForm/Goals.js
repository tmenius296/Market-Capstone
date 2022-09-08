import React, { useState } from "react";

export default function Goals({ formData, setFormData }) {
  let [currentValue, setCurrentValue] = useState("");

  return (
    <div>
      <p className="tip-paragraph">
        List 3-5 simple, quantifiable goals that you hope to achieve through
        implementing your marketing plan.
      </p>
      <div className="input-and-ATL">
        <input
          className="monoline-input"
          type="text"
          id="goals"
          placeholder="Goals"
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
              goals: [...formData.goals, currentValue],
            })
          }
        ></input>
      </div>
      <ul>
        {formData.goals.map((goal) => (
          <li>{goal}</li>
        ))}
      </ul>
    </div>
  );
}
