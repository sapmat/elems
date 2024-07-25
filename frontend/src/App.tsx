import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Home />} />
        <Route path="/characters" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
