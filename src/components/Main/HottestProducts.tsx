import "./HottestProducts.scss";

import Heart from "/src/img/Heart.svg";
import LeftArrowTail from "/src/img/LeftArrowTail.svg";
import RightArrowTail from "/src/img/RightArrowTail.svg";

import Maika from "/src/img/Maika.png";
import WhiteTermo from "/src/img/WhiteTermo.png";
import Chain from "/src/img/Chain.png";

function Card({
  img,
  title,
  type,
  prop,
  cost,
}: { img: string; title: string; type: string; prop: string; cost: number }) {
  return (
    <div className="card">
      <div className="relative cardImgNButton">
        <img src={img} alt="BeatifulPerson" className="cardImg" />
        <button type="button">
          <img src={Heart} alt="Loved" />
        </button>
      </div>
      <button type="button">
        <span className="cardTitle">{title}</span>
      </button>
      <div className="flex-column cardTypeNProp">
        <span className="cardType">{type}</span>
        <span>{prop}</span>
      </div>
      <span className="green cost">{cost} ГРН.</span>
    </div>
  );
}

export function CardsHeader({ title }: { title: string }) {
  return (
    <div className="cardsHeader">
      <span>{title}</span>
      <span className="counter">01 / 03</span>
      <div className="arrowsWithTails">
        <button type="button">
          <img src={LeftArrowTail} alt="LeftArrow" className="leftArrowTail" />
        </button>
        <button type="button">
          <img src={RightArrowTail} alt="RightArrow" />
        </button>
      </div>
    </div>
  );
}

function HottestProducts() {
  return (
    <div className="hottestProducts flex-column mainChildren">
      <CardsHeader title="Найгарячіщі товари" />
      <div className="cards">
        <Card
          img={WhiteTermo}
          title="Термобілизна для бодібілдерів"
          type="Для чоловіків"
          prop="2 кольори"
          cost={4000}
        />
        <Card
          img={Maika}
          title="Майка для бодібілдерів"
          type="Для жінок"
          prop="2 кольори"
          cost={1100}
        />
        <Card
          img={Chain}
          title="Ланцюжок для бодібілдерів"
          type="Аксесуари"
          prop="30 кг."
          cost={2000}
        />
      </div>
    </div>
  );
}

export default HottestProducts;
