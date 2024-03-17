import { CardsHeader } from "./HottestProducts";
import "./Reviews.scss";

import Rating from "/src/img/Rating.svg";

function Review({
  profile_img,
  name,
  rating_img,
  desc,
}: { profile_img: string; name: string; rating_img: string; desc: string }) {
  return (
    <div className="review flex-column border-black">
      <div className="ratingNProfile flex">
        <img src={profile_img} alt="Profile pct" className="profileImg" />
        <div className="ratingNName flex-column">
          <img src={rating_img} alt="Rating" className="rating" />
          <span>{name}</span>
        </div>
      </div>
      <span>{desc}</span>
    </div>
  );
}

function Reviews() {
  return (
    <div className="reviews flex-column mainChildren">
      <CardsHeader title="Відгуки" />
      <div className="reviewsWrapper flex grow">
        {[...Array(4)].map((_, i) => (
          <Review
            key={`review${i}`}
            profile_img={
              "https://s3-alpha-sig.figma.com/img/d92e/60fa/f1eafcc65076de7a1d51bc0416146be1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DyQCmZzu8k15oyvHBSNNSveGpgwxnx-3cBlK6kifigPv-u1bwnezg3b4UncB-ATVQSdr6yN~E84uaPF5ufAtKrZNWTNMM75FIEkCOjwMElKJkZ5ofZ1NSrgG2kxw2OFymPlntwyYyPvIr2xTrgsyfZlgeu50vhunpGv4OipzgODvCQsADuMPeMfEw2wvGG8CjndWSyWy1UOHIhJK5FFW3bztQ2RDdf4elUoQ1lCQcvshhe4XKwGy5TQJUHvVcXNywSFXWBKC513IziRPm2-CE6YJJuIf1lpIuWtj1anI-oczYkgywsdG5s~MgkoOYCt5xFrqW8W4KzHvyv1ahTEwkw__"
            }
            name="Жора Ремінгтон"
            rating_img={Rating}
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
