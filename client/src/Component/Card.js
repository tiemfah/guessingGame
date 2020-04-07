import React from "react";
import { Link } from "react-router-dom";

function StageCard(stage) {
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
    textAlign: "left",
    alignContent: "center",
  };

  const cardContent = {
    margin: "auto",
    paddingLeft: "17px",
    color: "grey",
  };

  return (
    <div style={card}>
      <Link to={`play/${stage._id}`}>
        <div style={cardContent}>
          <h3 style={{ textDecoration: "none" }}>Stage: {stage.hint}</h3>
          <p style={{ textDecoration: "none" }}>by {stage.author}</p>
        </div>
      </Link>
    </div>
  );
}

export default StageCard;