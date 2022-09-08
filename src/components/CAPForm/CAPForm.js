import React, { useState } from "react";
import MissionStatement from "./MissionStatement";
import TargetMarkets from "./TargetMarkets";
import Strengths from "./Strengths";
import Goals from "./Goals";
import FinalPreview from "./FinalPreview";

export default function CAPForm({ setSavedPlans }) {
  const [page, setPage] = useState(0);
  const [userKey, setUserKey] = useState("");

  const [savedFormData, setSavedFormData] = useState();

  let userKeyEntered = false;
  let retrievedUserKey = "";
  let plans = [{}];

  const FormTitles = [
    "Mission Statement",
    "Target Markets",
    "Strengths",
    "Goals",
    "Final Preview",
  ];

  const [formData, setFormData] = useState({
    mission: "",
    markets: [""],
    strengths: [""],
    goals: [""],
    userKey: userKey,
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
      return (
        <FinalPreview
          formData={formData}
          setFormData={setFormData}
          userKey={userKey}
          setUserKey={setUserKey}
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
            hidden={page === 0 || page === 5}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            hidden={page >= FormTitles.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              fetch(`http://localhost:5000/api/plan`, {
                method: "get",
                //body: userKey,
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  console.log("response:", data);
                  setSavedFormData(data);
                });
            }}
          >
            Retrieve all plans
          </button>
          <button
            hidden={page !== 4}
            onClick={async () => {
              const userKeyToSend =
                userKey || `${Math.floor(Math.random() * 10001)}`;

              if (userKey === userKeyToSend) {
                userKeyEntered = "true";
              } else {
                setUserKey(userKeyToSend);
              }
              fetch("http://localhost:5000/api/plan", {
                method: "post",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...formData, userKey: userKeyToSend }), //this does literally nothing lol
              });

              setPage((currentPage) => currentPage + 1);
            }}
          >
            Submit
          </button>

          <button
            hidden={page !== 5}
            onClick={() => {
              setPage(0);
            }}
          >
            Restart
          </button>
          <a href="/user">
            <button hidden={page !== 5}>Retrieve a plan</button>
          </a>

          <div hidden={page !== 5}>User key: {userKey}</div>
        </div>
      </div>
      {savedFormData &&
        savedFormData.map((data) => JSON.stringify(savedFormData, null, 2))}
    </div>
  );
}
