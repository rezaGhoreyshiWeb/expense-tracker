import React from "react";
import "../../styles/Card.css";

export default function Card({ children , className }) {
  console.log(children);
  return <div className={`card ${className}`}>{children}</div>;
}
