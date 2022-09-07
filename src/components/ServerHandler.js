import React, { useState, useEffect } from "react";

export default function ServerHandler() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div className="server-response">
      {typeof backendData.plans === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.plans.map((plans, i) => <p key={i}>{plans}</p>)
      )}
    </div>
  );
}
