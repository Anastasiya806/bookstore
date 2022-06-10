import { useState } from "react";
import SingIn from "../singIn/SingIn";
import SingUp from "../singUp/SingUp";
import "./registration.css";

const Registration = () => {
  const [currentPage, setCurrentPage] = useState<"signIn" | "signUp">("signIn");

  return (
    <div className="registration-wrapper">
      <div className="singIn-buttons">
        <button onClick={() => setCurrentPage("signIn")}>Sing in</button>
        <button onClick={() => setCurrentPage("signUp")}>Sing up</button>
      </div>
      {currentPage === "signIn" && <SingIn />}
      {currentPage === "signUp" && <SingUp />}
    </div>
  );
};

export default Registration;
