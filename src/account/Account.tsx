import { Link } from "react-router-dom";
import "./account.css";


const Account = () => {
  return (
      <div className="account-wrapper">
        <Link to="/">
          <div className="common-buttonBack"></div>
        </Link>
        <p className="account-title common-title">Account</p>
        <p className="common-subtitle">Profile</p>
        <div className="account-profile">
          <div className="account-profileName">
            <p>Name</p>
            <input type="text" placeholder="Anton Markov" />
          </div>
          <div className="account-profileEmail">
            <p>Email</p>
            <input type="email" placeholder="a.markov@gmail.com" />
          </div>
        </div>
        <p className="common-subtitle">Password</p>
        <div className="account-password">
          <p>Password</p>
          <input type="password" placeholder="•••••••••••••" />
        </div>
        <div className="account-newPassword">
          <div>
            <p>New password</p>
            <input type="password" placeholder="New password" />
          </div>
          <div>
            <p>Confirm new password</p>
            <input type="password" placeholder="Confirm new password" />
          </div>
        </div>
        <div className="account-buttons">
          <button className="account-buttonSave">Save changes</button>
          <button className="account-buttonCancel">Cancel</button>
        </div>
      </div>
  );
};

export default Account;
