import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // this means browser router will control the entire application

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
