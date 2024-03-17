import "./App.scss";

import React, { useState } from "react";

import logo from "./logo.svg";

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
        <div className="nav">
          <button type="button" className="logo">
            IGNAT
          </button>
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
        Main
        <div className="carousel">carousel</div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
