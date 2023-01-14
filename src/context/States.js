import React, { useState } from "react";
import Context from "./Contexts";

const States = (props) => {
  const [state, setState] = useState(30);

  return (
    <Context.Provider value={{ state, setState }}>
      {props.children}
    </Context.Provider>
  );
};

export default States;
