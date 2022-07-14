import ProfileCard from '../../components/profileCard/ProfileCard';
import ProfileLeft from '../../components/profileLeft/ProfileLeft';
import ProfileSide from '../../components/postSide/PostSide';

import './Profile.css';
import RightSide from '../../components/rightSide/RightSide';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <ProfileSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
