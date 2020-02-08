import React from "react";
import "../static/card.css";

function Card({ name, count, add, children }) {
  return (
    <div className={`card ${name}`}>
      <div className="add">
        较上日
        <br /> <span>+{add}</span>
      </div>
      <div className="num">{count}</div>
      <div className="text">{children}</div>
    </div>
  );
}

export default Card;
