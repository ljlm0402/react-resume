// import modules
import React from "react";
import ReactDOM from "react-dom";

// import scss & App & serviceWorker
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
