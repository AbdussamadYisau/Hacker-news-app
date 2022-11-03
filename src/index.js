import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from "./App";
import { Stories } from "./container/Stories";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="stories" element={<Stories />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);