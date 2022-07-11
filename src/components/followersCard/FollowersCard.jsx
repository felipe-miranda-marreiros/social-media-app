import { Followers } from '../../Data/FollowersData';
import './FollowersCard.css';

const FolllowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower" key={id}>
            <div>
              <img
                src={follower.img}
                alt={follower.username}
                className="followerImage"
              />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FolllowersCard;
