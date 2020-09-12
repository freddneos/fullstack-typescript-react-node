import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";

const App = () => {
  const [c, increment] = useState(0);
  const [apiMessage, setapiMessage] = useState();

  const callApi = useCallback(
    (prevState) => {
      axios.get("http://127.0.0.1:3000/api").then((response) => {
        setapiMessage(response.data.message || "Empty");
      });
    },
    [apiMessage]
  );

  return (
    <div className="App">
      <h1>{c}</h1>
      <button onClick={() => increment(c + 1)}>Press me</button>
      <button onClick={(prevState) => callApi(prevState)}>CALL API</button>
      <p>{apiMessage}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
