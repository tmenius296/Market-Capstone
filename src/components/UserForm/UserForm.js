import React, { useState } from "react";
import SignupInfo from "./SignupInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

export default function Form() {
  const [page, setPage] = useState(0);

  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  const [formData, setFormData] = useState({
    email: "",
    password: "", //if data type was number we'd make default value 0 instead of an empty string
    confirmPassword: "",
    firstName: "",
    lastName: "",
    userName: "",
    otherInfo: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignupInfo formData={formData} setFormData={setFormData}></SignupInfo>
      );
    } else if (page === 1) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
        ></PersonalInfo>
      );
    } else if (page === 2) {
      return (
        <OtherInfo formData={formData} setFormData={setFormData}></OtherInfo>
      );
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
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
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
