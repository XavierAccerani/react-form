import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Welcome to my dumb react form App</h1>
      <p>
        Hi, this is a little app to test Tailwind, react-hook-form and
        react-router-dom
      </p>
      <div>
        Test my signup
        <input
          type="button"
          value="Try the signup"
          onClick={() => navigate("signup")}
        />
      </div>
      <div>
        Test my form
        <input
          type="button"
          value="Try the form"
          onClick={() => navigate("dumbForm")}
        />
      </div>
    </div>
  );
}
export default Home;
