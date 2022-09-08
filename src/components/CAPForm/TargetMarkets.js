import React, { useState } from "react";

export default function TargetMarkets({ formData, setFormData }) {
  let [currentValue, setCurrentValue] = useState("");

  return (
    <div>
      <p className="tip-paragraph">
        Target Markets are specific sectors of clientelle that your marketing
        plan will cater its goals towards. Target Markets can be specific
        businesses, demographics, or even entire geographical areas
      </p>
      <input
        className="monoline-input"
        type="text"
        id="target-markets"
        placeholder="Target Markets"
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
            markets: [...formData.markets, currentValue],
          })
        }
      ></input>
      <ul>
        {formData.markets.map((market) => (
          <li>{market}</li>
        ))}
      </ul>
    </div>
  );
}
