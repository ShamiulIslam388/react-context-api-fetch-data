import ReactDOM from "react-dom";
import { DataProvider } from "./contexts/DataProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  rootElement
);
