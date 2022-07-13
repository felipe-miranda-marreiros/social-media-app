import ProfileCard from '../../components/profileCard/ProfileCard';
import ProfileLeft from '../../components/profileLeft/ProfileLeft';
import ProfileSide from '../../components/postSide/PostSide';

import './Profile.css';

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <ProfileSide />
      </div>
    </div>
  );
};

export default Profile;
