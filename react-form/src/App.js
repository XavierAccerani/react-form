import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dumbForm" />
      </Routes>
    </div>
  );
}

export default App;
