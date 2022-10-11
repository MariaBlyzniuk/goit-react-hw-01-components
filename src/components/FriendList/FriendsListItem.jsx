import PropTypes from "prop-types";
import { FriendsItem, FriendName } from "./FriendList.styled";

export const FriendsListItem = ({friend: {avatar, name, isOnline}}) => {
    return <FriendsItem isOnline = {isOnline === true}>
        <img src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
</FriendsItem>
}

FriendsListItem.propTypes = {
 friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
}