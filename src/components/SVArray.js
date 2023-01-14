import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

const SVArray = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(Math.floor(Math.random() * 100));
    }
    setArray(newArray);
  }, []);

  return (
    <div className="sv__array">
      {array.map((value, index) => (
        <div
          className="sv__array__bar"
          key={index}
          style={{ height: `${value * 5}px` }}
        ></div>
      ))}
    </div>
  );
};

export default SVArray;
