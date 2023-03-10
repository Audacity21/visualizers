import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = () => {
  const [size, setSize] = useState(50);
  const [array, setArray] = useState([]);
  const [options, setOptions] = useState("");

  const optionsHandler = (e) => {
    setOptions(e.target.value);
    console.log(e.target.value);
  };

  const handleSlide = (e) => {
    setSize(e.target.value);
  };

  const handleReset = () => {
    generateArray();
  };

  const bubbleSort = async () => {
    setTimeout(() => {
      let newArr = [...array];
      for (let i = 0; i < newArr.length; i++) {
        setTimeout(() => {
          for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
              let temp = newArr[j];
              newArr[j] = newArr[j + 1];
              newArr[j + 1] = temp;
              setTimeout(() => {
                document.getElementById(j).style.backgroundColor =
                  "rgb(158 164 249)";
                document.getElementById(j + 1).style.backgroundColor =
                  "rgb(74 86 241)";
                setArray([...newArr]);
              }, j * 50);
            }
          }
        }, i * 100);
      }
    }, 50);
  };

  const selectionSort = async () => {
    setTimeout(() => {
      let newArr = [...array];
      for (let i = 0; i < newArr.length; i++) {
        setTimeout(() => {
          let min = i;
          for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[min]) {
              min = j;
            }
          }
          let temp = newArr[i];
          newArr[i] = newArr[min];
          newArr[min] = temp;
          setTimeout(() => {
            setArray([...newArr]);
          }, i * 50);
        }, i * 100);
      }
    }, 50);
  };

  const insertionSort = async () => {
    setTimeout(() => {
      let newArr = [...array];
      for (let i = 1; i < newArr.length; i++) {
        setTimeout(() => {
          let key = newArr[i];
          let j = i - 1;

          while (j >= 0 && newArr[j] > key) {
            newArr[j + 1] = newArr[j];
            j = j - 1;
          }
          newArr[j + 1] = key;
          setTimeout(() => {
            setArray([...newArr]);
          }, i * 50);
        }, i * 100);
      }
    }, 50);
  };

  const algoSelect = () => {
    switch (options) {
      case "bubble":
        bubbleSort();
        break;
      case "insertion":
        insertionSort();
        break;
      case "selection":
        selectionSort();
        break;
      default:
        bubbleSort();
    }
  };

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < size; i++) {
      document.getElementById(i).style.backgroundColor = "#5DFDCB";
      newArray.push(Math.floor(Math.random() * 95 + 5));
    }
    setArray(newArray);
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
          <button className="sv__appbar__button sort" onClick={algoSelect}>
            START
          </button>
          <button className="sv__appbar__button reset" onClick={handleReset}>
            RESET
          </button>
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
          <select
            className="sv__appbar__algo__select"
            onChange={(e) => optionsHandler(e)}
          >
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
          </select>
        </div>
      </div>

      <div className="sv__array">
        {array.map((value, index) => (
          <div
            className="sv__array__bar"
            key={index}
            id={index}
            style={{ height: `${value * 5}px`, width: `${75 / size}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
