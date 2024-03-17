import { CardsHeader } from "./HottestProducts";
import "./Reviews.scss";

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

function Reviews() {
  return (
    <div className="reviews flex-column">
      <CardsHeader title="Відгуки" />
      <div className="reviewsWrapper flex grow">
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
  );
}

export default Reviews;
