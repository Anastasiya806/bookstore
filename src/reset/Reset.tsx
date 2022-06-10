import Footer from "../footer/Footer"
import Header from "../header/Header"
import '../common.css'
import "./reset.css"

const Reset = () => {
    return (
      <div>
        <Header />
        <div className="paset-wrapper">
          <div className="pased-title">
            <p className="common-subtitle">Reset password</p>
          </div>
          <div className="reset-email">
            <p>Email</p>
            <input type="email" placeholder="Your email" />
          </div>
          <button className="reset-button">Reset</button>
        </div>
        <Footer />
      </div>
    );
}

export default Reset