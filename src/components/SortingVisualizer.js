import React from "react";
import Navbar from "./SVNavbar";
import SVArray from "./SVArray";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  return (
    <div className="sv__container">
      <Navbar />
      <SVArray />
    </div>
  );
};

export default SortingVisualizer;
