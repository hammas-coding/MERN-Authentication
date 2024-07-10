import React from "react";
import '../App.css'
function Panel({ side, title, description, buttonLabel, onClick, image }) {
  return (
    <div className={`panel ${side}-panel`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn transparent" onClick={onClick}>
          {buttonLabel}
        </button>
      </div>
      <img src={image} className="image" alt="" />
    </div>
  );
}

export default Panel;
