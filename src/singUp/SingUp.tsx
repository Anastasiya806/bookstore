import Footer from '../footer/Footer'
import Header from '../header/Header'
import './singUp.css'

const SingUp = () => {
    return (
      <div>
        <Header />
        <div className="singUp-wrapper">
          <div className="singUp-buttons">
            <button>Sing in</button>
            <button>Sing up</button>
          </div>
          <div className="singUp-profile">
            <p>Name</p>
            <input type="text" placeholder="Your name" />
            <p>Email</p>
            <input type="email" placeholder="Your email" />
            <p>Password</p>
            <input type="password" placeholder="Your password" />
            <p>Confirm new password</p>
            <input type="password" placeholder="Confirm your password" />
          </div>
          <button className="singUp-button">Sing up</button>
        </div>
        <Footer />
      </div>
    );
}

export default SingUp