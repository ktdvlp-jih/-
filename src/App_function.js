import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function App_function() {
  var name = "전일훈";
  return (
    <Fragment>
      {name === "전일훈" ? <h1>전일훈</h1> : <h1>리액트</h1>}
      <div>
      </div>
    </Fragment>
    
  );
}

export default App_function;
