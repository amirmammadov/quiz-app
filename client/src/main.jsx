import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/index.css";

/*Redux Store*/
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
