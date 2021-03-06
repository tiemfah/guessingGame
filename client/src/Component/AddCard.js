import React from "react";
import { Link } from "react-router-dom";

function AddStageCard(stage) {
  const card = {
    display: "flex",
    boxSizing: "border-box",
    fontFamily: "Verdana",
    padding: "0",
    border: "0",
    margin: "1%",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    borderRadius: "5px",
    width: "320px",
    height: "100px",
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "grey"
  };

  const cardContent = {
    margin: "auto",
    paddingLeft: "17px",
    color: "white",
  };

  return (
    <div style={card}>
      <Link to={`create/`}>
        <div style={cardContent}>
          <h3>Add Stage</h3>
        </div>
      </Link>
    </div>
  );
}

export default AddStageCard;
