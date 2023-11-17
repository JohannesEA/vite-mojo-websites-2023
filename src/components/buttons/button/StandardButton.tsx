import React from "react";
import "./StandardButton.css";

const StandardButton = ({ text, color = "accent-gold", onClick }) => {
  return (
    <button className={`standard-button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default StandardButton;
