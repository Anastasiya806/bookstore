import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./singIn.css";

const SingIn = () => {
  return (
    <div>
        <Header />
      <div className="singIn-wrapper">
        <div className="singIn-buttons">
          <button>Sing in</button>
          <button>Sing up</button>
        </div>
        <div className="singIn-email">
          <p>Email</p>
          <input type="email" placeholder="Your email" />
        </div>
        <div className="singIn-password">
          <p>Password</p>
          <input type="password" placeholder="Your password" />
        </div>
        <p className="singIn-text">Forgot password ?</p>
        <button className="singIn-button">Sing in</button>
      </div>
      <Footer />
    </div>
  );
};

export default SingIn;
