import "./App.scss";

import React, { useState } from "react";

import logo from "./logo.svg";

import LeftArrow from "/src/img/LeftArrow.svg";
import RightArrow from "/src/img/RightArrow.svg";
import Heart from "/src/img/Heart.svg";

import Maika from "/src/img/Maika.png";
import WhiteTermo from "/src/img/WhiteTermo.png";
import Chain from "/src/img/Chain.png";

import Main from "./components/Main";

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

function Header() {
  return <div></div>;
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
      <Main />
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
