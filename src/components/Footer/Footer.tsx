import "./Footer.scss";
import NavBar from "../NavBar";

function Footer() {
  return (
    <div className="footer flex-column">
      <div className="normalFooter flex">
        <div className="contactCentr flex-column">
          <span className="normalFooterTitle">Контакт - центр</span>
          <span className="middleFont">098 900 09 09 </span>
          <span className="middleFont">Пн - Пт 09:00 - 21:00</span>
          <span className="middleFont">Пн - Пт 09:00 - 21:00</span>
        </div>
        <div className="toCustomers flex-column">
          <span className="normalFooterTitle">Покупцям</span>
          <button type="button">
            <span className="middleFont">Оплата і доставка</span>
          </button>
          <button type="button">
            <span className="middleFont">Повернення</span>
          </button>
          <button type="button">
            <span className="middleFont">Питання та відповіді</span>
          </button>
        </div>
        <div className="personalCabinet flex-column">
          <span className="normalFooterTitle">Особистий кабінет</span>
          <button type="button">
            <span className="middleFont">Мої дані</span>
          </button>
          <button type="button">
            <span className="middleFont">Історія замовлень</span>
          </button>
          <button type="button">
            <span className="middleFont">Улюблені</span>
          </button>
          <button type="button">
            <span className="middleFont">Розсилки</span>
          </button>
        </div>
        <div className="about flex-column">
          <span className="normalFooterTitle">Про компанію</span>
          <button type="button">
            <span className="middleFont">Про нас</span>
          </button>
          <button type="button">
            <span className="middleFont">Новини</span>
          </button>
          <button type="button">
            <span className="middleFont">Стати партнером</span>
          </button>
          <button type="button">
            <span className="middleFont">Угода користувача</span>
          </button>
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
