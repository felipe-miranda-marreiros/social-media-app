import FolllowersCard from '../followersCard/FollowersCard';
import InfoCard from '../inforCard/InfoCard';
import LogoSearch from '../logoSearch/LogoSearch';

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FolllowersCard />
    </div>
  );
};

export default ProfileLeft;
