import { FriendsListItem } from "./FriendsListItem"
import { FriendsInfo } from "./FriendList.styled"
export const FriendsList = ({ friends }) => {
    return friends.map(friend => (
                <FriendsInfo key={friend.id}>
                    <FriendsListItem friend={friend} />
                </FriendsInfo>
            ))
        
}