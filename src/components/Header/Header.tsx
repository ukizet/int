import NavBar from "../NavBar";
import "./Header.scss";

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
          <img src="" alt="SearchIcon" />
          <input type="text" />
        </label>
        <button type="button" className="loved">
          <img src="" alt="Loved" />
        </button>
        <button type="button" className="shoppingcart">
          <img src="" alt="Shoppingcart" />
        </button>
      </div>
    </div>
  );
}

export default Header;
