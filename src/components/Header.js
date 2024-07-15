import { LOGO_URL } from "../../utils/constants";

const Header = () => (
  <div className="headerComp">
    <div className="logo-image">
      <img src={LOGO_URL} />
    </div>
    <div className="header-nav-bar">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Partners</li>
        <li>Know More</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
