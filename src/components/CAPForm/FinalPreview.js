import React, { useState } from "react";

export default function FinalPreview({ formData, setUserKey }) {
  return (
    <>
      <div className="other-info-container">
        <div className="mission-preview">
          Mission Statement: {formData.mission}
        </div>
        <br></br>
        <div>
          {formData.markets.map((stuff) => (
            <div className="markets-preview">Target Market: {stuff}</div>
          ))}
        </div>
        <br></br>
        <div>
          {formData.strengths.map((stuff) => (
            <div className="strengths-preview">Strength: {stuff}</div>
          ))}
        </div>
        <br></br>
        {formData.goals.map((stuff) => (
          <div className="goals-preview">Goal: {stuff}</div>
        ))}
        <input
          type="text"
          placeholder="If you already have a user key, enter it here"
          onChange={(e) => setUserKey(e.target.value)}
        />
      </div>
    </>
  );
}
