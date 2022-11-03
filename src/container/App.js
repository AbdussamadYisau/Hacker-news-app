import { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from '../logo-color.png';
import "../styles/welcomeScreen.css";


export const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/signup'
    }, 5000);
  }
  , []);
  return (
    <div>
      <img src={Logo} alt="React Logo" />
      </div>
  );
};
