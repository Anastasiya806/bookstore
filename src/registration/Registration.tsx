import { useState } from "react";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import "./registration.css";

const Registration = () => {
  const [currentPage, setCurrentPage] = useState<"signIn" | "signUp">("signIn");

  return (
    <div className="registration-wrapper">
      <div className="signIn-buttons">
        <button onClick={() => setCurrentPage("signIn")}>Sign in</button>
        <button onClick={() => setCurrentPage("signUp")}>Sign up</button>
      </div>
      {currentPage === "signIn" && <SignIn />}
      {currentPage === "signUp" && <SignUp />}
    </div>
  );
};

export default Registration;
