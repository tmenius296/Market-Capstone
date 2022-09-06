import React, { useState } from "react";
import MissionStatement from "./MissionStatement";
import TargetMarkets from "./TargetMarkets";
import Strengths from "./Strengths";
import Goals from "./Goals";
import FinalPreview from "./FinalPreview";

export default function CAPForm() {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "Mission Statement",
    "Target Markets",
    "Strengths",
    "Goals",
    "Final Preview",
  ];

  const [formData, setFormData] = useState({
    mission: "",
    markets: [],
    strengths: [],
    goals: [],
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <MissionStatement
          formData={formData}
          setFormData={setFormData}
        ></MissionStatement>
      );
    } else if (page === 1) {
      return (
        <TargetMarkets
          formData={formData}
          setFormData={setFormData}
        ></TargetMarkets>
      );
    } else if (page === 2) {
      return (
        <Strengths formData={formData} setFormData={setFormData}></Strengths>
      );
    } else if (page === 3) {
      return <Goals formData={formData} setFormData={setFormData}></Goals>;
    } else if (page === 4) {
      console.log(page);
      return (
        <FinalPreview
          formData={formData}
          setFormData={setFormData}
        ></FinalPreview>
      );
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "0%"
                : page === 1
                ? "25%"
                : page === 2
                ? "50%"
                : page === 3
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page === FormTitles.length}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
          <button disabled={page !== 4}>Submit</button>
        </div>
      </div>
    </div>
  );
}
