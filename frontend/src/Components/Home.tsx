import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="btn" onClick={() => navigate("/")}>
        <a>HOME</a>
      </div>
      <div className="btn" onClick={() => navigate("/")}>
        <a>EPISODES</a>
      </div>
      <div className="btn" onClick={() => navigate("/")}>
        <a>CHARACTERS</a>
      </div>
    </div>
  );
};

export default Home;
