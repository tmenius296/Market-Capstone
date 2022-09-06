import React, { useState } from "react";

export default function FinalPreview({ formData, setFormData }) {
  let [currentValue, setCurrentValue] = useState();
  return (
    <div className="other-info-container">
      <ul>
        {formData.mission}
        {formData.markets.map((stuff) => (
          <li>{stuff}</li>
        ))}
        {formData.strengths.map((stuff) => (
          <li>{stuff}</li>
        ))}
        {formData.goals.map((stuff) => (
          <li>{stuff}</li>
        ))}
      </ul>
      <div>
        <div>Already have a user key?</div>
        <input type="text" placeholder="Enter key here"></input>
      </div>
    </div>
  );
}
