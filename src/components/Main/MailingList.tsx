import "./MailingList.scss";

function MailingList() {
  return (
    <div className="mailingList flex-column mainChildren justify-between">
      <span className="mailingListTitle">Спіймай всі акції!</span>
      <span className="mailingListDesc middleFont">
        Підписуйся на Email розсилку і отримуй інформацію про всі акції, які
        будуть з`влятись у нашому магазині. А у нас їх багато :D
      </span>
      <label className="emailLabel justify-between">
        <input
          type="text"
          className="emailInput"
          placeholder="ВВЕДІТЬ E-MAIL"
        />
        <button type="button" className="subscribe bg-black">
          Підписатись
        </button>
      </label>
    </div>
  );
}

export default MailingList;
