import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import {ListOfFriends} from './FriendListStyled'

export const FriendList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
