import Carousel from "./Carousel";
import GiftToFriends from "./GiftToFriends";
import HottestProducts from "./HottestProducts";
import MailingList from "./MailingList";
import Reviews from "./Reviews";

import "./Main.scss";

function Main() {
  return (
    <div className="main">
      <Carousel />
      <GiftToFriends />
      <HottestProducts />
      <MailingList />
      <Reviews />
    </div>
  );
}

export default Main;
