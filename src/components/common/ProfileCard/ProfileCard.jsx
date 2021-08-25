/* eslint-disable @next/next/no-img-element */
import Button from "../../ui/Button/Button";

export default function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card">
        <img src="https://thispersondoesnotexist.com/image" alt="User image" className="card__image" />
        <div className="card__text">
          <h2>Ash Armstrong</h2>
          <p>I enjoy drinking a cup of coffee every day</p>
        </div>
        <ul className="card__info">
          <li>
            <span className="card__info__stats">172</span>
            <span>Trades</span>
          </li>
          <li>
            <span className="card__info__stats">47</span>
            <span>Arts</span>
          </li>
          <li>
            <span className="card__info__stats">20</span>
            <span>ETH Available</span>
          </li>
        </ul>
        <div className="card__action">
          <Button>Edit</Button>
          <Button secondary>Settings</Button>
        </div>
      </div>
    </div>
  );
}
