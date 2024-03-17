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
      <div className="relative">
        <img src={img} alt="BeatifulPerson" className="cardImg" />
        <button type="button">
          <img src={Heart} alt="Loved" />
        </button>
      </div>
      <button type="button">
        <span>{title}</span>
      </button>
      <div className="flex-column">
        <span>{type}</span>
        <span>{prop}</span>
      </div>
      <span>{cost} ГРН.</span>
    </div>
  );
}

export function CardsHeader({ title }: { title: string }) {
  return (
    <div className="cardsHeader">
      <span>{title}</span>
      <span className="counter">01 / 03</span>
      <div>
        <button type="button">
          <img src={LeftArrowTail} alt="LeftArrow" />
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
    <div className="hottestProducts flex-column">
      <CardsHeader title="Найгарячіщі" />
      <div className="cards">
        <Card
          img={WhiteTermo}
          title="Термобілизна"
          type="Для чолов"
          prop="2 кольори"
          cost={4000}
        />
        <Card
          img={Maika}
          title="Майка"
          type="Для жінок"
          prop="2 кольори"
          cost={1100}
        />
        <Card
          img={Chain}
          title="Ланцюжок"
          type="Аксес"
          prop="2 кольори"
          cost={2000}
        />
      </div>
    </div>
  );
}

export default HottestProducts;
