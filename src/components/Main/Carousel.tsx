import "./Carousel.scss";

import LeftArrow from "/src/img/LeftArrow.svg";
import RightArrow from "/src/img/RightArrow.svg";

function Carousel() {
  return (
    <div className="carousel mainChildren">
      <button type="button">
        <img src={LeftArrow} alt="LeftArrow" />
      </button>
      <div className="carouselTitle">
        <span className="slogan">Швидше. Вище. Сильніше.</span>
        <span className="nike">Разом із Nike</span>
      </div>
      <div className="discounts flex-column flex-center">
        <div className="discount40wrapper">
          <span className="discount40">Знижки до 40%</span>
        </div>
        <span className="onlyWeek">Залишився лише тиждень</span>
      </div>
      <button type="button">
        <img src={RightArrow} alt="RightArrow" />
      </button>
    </div>
  );
}

export default Carousel;
