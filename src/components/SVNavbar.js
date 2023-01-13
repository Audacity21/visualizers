import React from "react";
import "./SortingVisualizer.css";

const SVNavbar = () => {
  return (
    <div>
      <div className="sv__appbar">
        <div className="sv__appbar__title">Sorting Visualizer</div>
        <div className="sv__appbar__buttons">
          <button className="sv__appbar__button sort">START</button>
          <button className="sv__appbar__button reset">RESET</button>
        </div>
        <div className="sv__appbar__speed">
          <div className="sv__appbar__speed__title">Speed</div>
          <div className="sv__appbar__speed__slider">
            <input type="range" min="1" max="100" />
          </div>
        </div>
        <div className="sv__appbar__algo">
          <select className="sv__appbar__algo__select">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SVNavbar;
