/* eslint react/jsx-filename-extension: 0 */

import React from "react";
import ReactDOM from "react-dom";

import App from "./sloth/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
