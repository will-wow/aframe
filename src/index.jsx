import React from "react";
import ReactDOM from "react-dom";

import "aframe";
import "aframe-animation-component";
import "aframe-particle-system-component";

import App from "./sloth/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
