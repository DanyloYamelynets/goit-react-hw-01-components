import PropTypes from 'prop-types';
import { MyFriend, FriendStatus, FriendName } from './FriendListItemStyled';

const FriendListItem = ({ friend }) => {
  return (
    <MyFriend>
      <FriendStatus isOnline={friend.isOnline} />
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <FriendName>{friend.name}</FriendName>
    </MyFriend>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
