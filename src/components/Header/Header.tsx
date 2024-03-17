import NavBar from "../NavBar";
import "./Header.scss";

import SearchIcon from "/src/img/SearchIcon.svg";
import BiggerHeart from "/src/img/BiggerHeart.svg";
import ShoppingCart from "/src/img/ShoppingCart.svg";

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <span>098 900 09 09</span>
        <button type="button" className="help">
          Допомога
        </button>
        <button type="button" className="login">
          Увійти/Зареєструватися
        </button>
      </div>
      <div className="navHeader">
        <button type="button" className="logo">
          IGNAT
        </button>
        <NavBar className="nav" />
        <label className="search">
          <img src={SearchIcon} alt="SearchIcon" />
          <input type="text" />
        </label>
        <button type="button" className="loved">
          <img src={BiggerHeart} alt="Loved" />
        </button>
        <button type="button" className="shoppingcart">
          <img src={ShoppingCart} alt="Shoppingcart" />
        </button>
      </div>
    </div>
  );
}

export default Header;
