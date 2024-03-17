import "./GiftToFriends.scss";

function GiftToFriends() {
  return (
    <div className="giftToFriends mainChildren">
      <div>
        <span className="giftToFriendsTitle">
          Ми знаємо, що сподобається вашим “великим” друзям!
        </span>
        <span className="giftToFriendsDesc middleFont">
          Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
          термобілизни “Big warm”
        </span>
        <button type="button" className="bg-black giftToFriendsButton">
          До каталогу
        </button>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/8ceb/3265/a4d6eefed65b1a9d9c2fb6bfdab4f8db?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qNdWYmw9czZnNS60RuC-NyVtnT3awzvQKBKXLBdhRfLUY5ZIY9ip56yxS61lHyWICo-JQtFvy0eNcho85kOMFYUSgcFHR5TwYlqDaDgt1T87jE7EZ~onPzLzlSZEyJdaCMa-Y8f5eKgDmlNKGfvYz4FTk-G4srG8aqOfyRV7IcWcjyPN1ZcT78~uDj-79m8cNEAIdYfraCWWMaLZzMWf4QPfE8ImD4-GCbc4jc-UT43C4yfK4Sf4cexw3kT2mYdADHr9CUgLQqLRE61vV6v4zVy0lNQkP4bIdRtm~xe62H4xmidpvnDTVxbAnAoGoFRJiGWyrEHLmJhFfKPLUioAhg__"
        alt="Big Man"
        className="bigMan"
      />
    </div>
  );
}

export default GiftToFriends;
