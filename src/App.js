import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <h1>News Reader</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/stories">Stories</Link> 
      
      </nav>
    </div>
  );
};
