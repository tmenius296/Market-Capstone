import React, { useState } from "react";

export default function Goals({ formData, setFormData }) {
  let [currentValue, setCurrentValue] = useState("");

  return (
    <div>
      <p>
        List 3-5 simple, quantifiable goals that you hope to achieve through
        implementing your marketing plan.
      </p>
      <input
        type="text"
        id="goals"
        placeholder="Goals"
        value={currentValue}
        onChange={(event) => setCurrentValue(event.target.value)}
      ></input>
      <ul>
        {formData.goals.map((goal) => (
          <li>{goal}</li>
        ))}
      </ul>
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
  );
}
