import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./style.css";
import {SERVER_API_BASE_URL} from "../config";


const App = () => {
  const [c, increment] = useState(0);
  const [apiMessage, setapiMessage] = useState();

  const callApi = useCallback(
    (prevState) => {
      axios.get(SERVER_API_BASE_URL).then((response) => {
        setapiMessage(response.data.message || "Empty");
      });
    },
    [apiMessage]
  );

  return (
    <div className="App">
      <h1>{c}</h1>
      <button onClick={() => increment(c + 1)}>Press here</button>
      <button onClick={(prevState) => callApi(prevState)}>Call API </button>
      <p>{apiMessage}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
