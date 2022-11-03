import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Stories } from "./container/Stories";
import { Login } from "./container/login";
import { SignUp } from "./container/signup";
import { App } from "./container/App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="stories" element={<Stories />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);