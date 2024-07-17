import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  return (
    <div className="headerComp">
      <div className="logo-image">
        <img src={LOGO_URL} />
      </div>
      <div className="header-nav-bar">
        <ul>
          <li>
            <Link className="link-style" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/AboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/Contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/Contact">
              Know More
            </Link>
          </li>
          <li>
            <Link className="link-style" to="/Contact">
              Cart
            </Link>
          </li>
          <button
            className="loginBtnStyle"
            type="button"
            onClick={() => {
              loginState == "Login"
                ? setLoginState("Logout")
                : setLoginState("Login");
            }}
          >
            {loginState}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
