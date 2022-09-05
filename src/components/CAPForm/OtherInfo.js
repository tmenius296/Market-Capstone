import React from "react";

export default function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Other Info"
        value={formData.OtherInfo}
        onChange={(event) =>
          setFormData({ ...formData, OtherInfo: event.target.value })
        }
      ></input>
    </div>
  );
}
