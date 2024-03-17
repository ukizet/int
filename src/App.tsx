import "./App.scss";

import React, { useState } from "react";

import logo from "./logo.svg";

import LeftArrow from "/src/img/LeftArrow.svg";
import RightArrow from "/src/img/RightArrow.svg";
import Heart from "/src/img/Heart.svg";

import Maika from "/src/img/Maika.png";
import WhiteTermo from "/src/img/WhiteTermo.png";
import Chain from "/src/img/Chain.png";

function CardsHeader({ title }: { title: string }) {
  return (
    <div className="cardsHeader">
      <span>{title}</span>
      <span className="counter">01 / 03</span>
      <div>
        <button type="button">
          <img src="" alt="LeftArrow" />
        </button>
        <button type="button">
          <img src="" alt="RightArrow" />
        </button>
      </div>
    </div>
  );
}

function Card({
  img,
  title,
  type,
  prop,
  cost,
}: { img: string; title: string; type: string; prop: string; cost: number }) {
  return (
    <div className="card">
      <div className="cardImgDiv relative">
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

function Review({
  profile_img,
  name,
  rating_img,
  desc,
}: { profile_img: string; name: string; rating_img: string; desc: string }) {
  return (
    <div className="review flex-column border-black">
      <div className="ratingNProfile flex">
        <img src={profile_img} alt="Profile pct" />
        <div className="ratingNName flex-column">
          <img src={rating_img} alt="Rating" />
          <span>{name}</span>
        </div>
      </div>
      <span>{desc}</span>
    </div>
  );
}

function NavBar({ className }: { className: string }) {
  return (
    <div className={className}>
      <button type="button" className="category">
        НОВИНКИ
      </button>
      <button type="button" className="category">
        ЧОЛОВІКИ
      </button>
      <button type="button" className="category">
        ЖІНКИ
      </button>
      <button type="button" className="category">
        АКСЕСУАРИ
      </button>
      <button type="button" className="category">
        АКЦІЇ
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
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
      <div className="main">
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
        <div className="giftToFriends">
          <div>
            <span>Ми знаємо, що сподобається вашим “великим” друзям!</span>
            <span>
              Обирай подарунок своїм друзями бодібілдерам із нашою новою
              колекцію термобілизни “Big warm”
            </span>
            <button type="button" className="bg-black">
              До каталогу
            </button>
          </div>
          <img
            src="https://s3-alpha-sig.figma.com/img/8ceb/3265/a4d6eefed65b1a9d9c2fb6bfdab4f8db?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNdWYmw9czZnNS60RuC-NyVtnT3awzvQKBKXLBdhRfLUY5ZIY9ip56yxS61lHyWICo-JQtFvy0eNcho85kOMFYUSgcFHR5TwYlqDaDgt1T87jE7EZ~onPzLzlSZEyJdaCMa-Y8f5eKgDmlNKGfvYz4FTk-G4srG8aqOfyRV7IcWcjyPN1ZcT78~uDj-79m8cNEAIdYfraCWWMaLZzMWf4QPfE8ImD4-GCbc4jc-UT43C4yfK4Sf4cexw3kT2mYdADHr9CUgLQqLRE61vV6v4zVy0lNQkP4bIdRtm~xe62H4xmidpvnDTVxbAnAoGoFRJiGWyrEHLmJhFfKPLUioAhg__"
            alt="Big Man"
          />
        </div>
        <div className="hottestProducts">
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
        <div className="mailingList flex-column">
          <span>Спіймай акції</span>
          <span>
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
        <div className="reviews flex-column">
          <CardsHeader title="Відгуки" />
          <div className="reviews flex grow">
            {[...Array(4)].map((_, i) => (
              <Review
                key={`review${i}`}
                profile_img="emt"
                name="Жора Ремінгтон"
                rating_img="emt"
                desc="
                Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...
                "
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer flex-column">
        <div className="bottomFooter bg-black justify-between">
          <NavBar className="bottomNav" />
          <span className="rigths">rights</span>
        </div>
      </div>
    </div>
  );
}

export default App;
