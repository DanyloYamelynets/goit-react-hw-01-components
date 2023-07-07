import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  Username,
  Tag,
  Location,
  Stats,
  StatsList,
  Label,
  Quantity,
} from './ProfileStyled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileDiv>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" width={200} />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsList>
      </Stats>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
