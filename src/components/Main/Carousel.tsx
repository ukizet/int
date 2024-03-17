import "./Carousel.scss";

import LeftArrow from "/src/img/LeftArrow.svg";
import RightArrow from "/src/img/RightArrow.svg";

function Carousel() {
  return (
    <div className="carousel">
      <button type="button">
        <img src={LeftArrow} alt="LeftArrow" />
      </button>
      <div className="carouselTitle">
        <span>Швидше. Вище. Сильніше.</span>
        <span>Разом із Nike</span>
      </div>
      <div className="discounts flex-column">
        <span>Знижки до 40%</span>
        <span>Залишився лише тиждень</span>
      </div>
      <button type="button">
        <img src={RightArrow} alt="RightArrow" />
      </button>
    </div>
  );
}

export default Carousel;
