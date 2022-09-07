import React from "react";
import CAPForm from "../CAPForm/CAPForm";

//C:\Users\trent\Downloads\stepform\my-app\src\components\CAPForm

export default function Home({ setSavedPlans }) {
  return (
    <>
      <h1>Welcome!</h1>
      <CAPForm setSavedPlans={setSavedPlans}></CAPForm>
    </>
  );
}
