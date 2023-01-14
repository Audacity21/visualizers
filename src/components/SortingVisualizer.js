import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [size, setSize] = useState(50);
  const [array, setArray] = useState([]);

  const handleSlide = (e) => {
    setSize(e.target.value);
  };

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      newArray.push(Math.floor(Math.random() * 95 + 5));
    }
    setArray(newArray);
  }, [size]);

  return (
    <div className="sv__container">
      <div className="sv__appbar">
        <div className="sv__appbar__title">Sorting Visualizer</div>
        <div className="sv__appbar__buttons">
          <button className="sv__appbar__button sort">START</button>
          <button className="sv__appbar__button reset">RESET</button>
        </div>
        <div className="sv__appbar__speed">
          <div className="sv__appbar__speed__title">Speed</div>
          <div className="sv__appbar__speed__slider">
            <input
              type="range"
              min="5"
              max="99"
              onChange={(e) => handleSlide(e)}
            />
            {size}
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

      <div className="sv__array">
        {array.map((value, index) => (
          <div
            className="sv__array__bar"
            key={index}
            style={{ height: `${value * 5}px`, width: `${75 / size}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
