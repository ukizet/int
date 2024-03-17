import "./Footer.scss";
import NavBar from "../NavBar";

function Footer() {
  return (
    <div className="footer flex-column">
      <div className="bottomFooter bg-black justify-between">
        <NavBar className="bottomNav" />
        <span className="rigths">rights</span>
      </div>
    </div>
  );
}

export default Footer;
