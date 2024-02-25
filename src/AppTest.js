import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function AppTest() {
  var name = "전일훈";
  return (
    <Fragment>
      {name === "전일훈" ? <h1>전일훈</h1> : <h1>리액트</h1>}
      <div>
      // 이런 주석이나
    /**이러한 주석 */
      </div>
    </Fragment>
    
  );
}

export default AppTest;
