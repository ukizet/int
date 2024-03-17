import "./Footer.scss";
import NavBar from "../NavBar";

function Footer() {
  return (
    <div className="footer flex-column">
      <div className="normalFooter flex">
        <div className="contactCentr flex-column">
          <span className="normalFooterTitle"></span>
        </div>
        <div className="toCustomers flex-column">
          <span className="normalFooterTitle"></span>
        </div>
        <div className="personalCabinet flex-column">
          <span className="normalFooterTitle"></span>
        </div>
        <div className="about flex-column">
          <span className="normalFooterTitle"></span>
        </div>
      </div>
      <div className="bottomFooter bg-black justify-between">
        <NavBar className="bottomNav" />
        <span className="rigths">© 2022 — 2023 IGNAT. Усі права захищені.</span>
      </div>
    </div>
  );
}

export default Footer;
