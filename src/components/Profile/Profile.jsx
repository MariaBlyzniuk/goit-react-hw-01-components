import PropTypes from "prop-types";
import { Wrapper } from "./Profile.styled";
import { User,UserInfo,UserStats,UserStatsItem } from "./Profile.styled";
import { FiAtSign } from "react-icons/fi";

export const Profile = ({ profile: { username, tag, location, avatar, stats: { followers, views, likes } } }) => {
    return <Wrapper>
  <User>
    <img
      src={avatar}
      alt="User avatar"
      width={250}
    />
      <UserInfo>{username}</UserInfo>
      <UserInfo><FiAtSign/>{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>
  </User>

  <UserStats >
    <UserStatsItem>
      <span>Followers</span>
      <span>{followers}</span>
    </UserStatsItem>
    <UserStatsItem>
      <span>Views</span>
      <span>{views}</span>
    </UserStatsItem>
    <UserStatsItem>
      <span>Likes</span>
      <span>{likes}</span>
    </UserStatsItem>
  </UserStats>
</Wrapper>;
}

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
    };