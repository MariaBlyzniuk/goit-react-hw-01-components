import { FriendsListItem } from "./FriendsListItem"
export const FriendsList = ({ friends }) => {
    return <ul class="friend-list">
        {friends.map(friend => (<FriendsListItem friend={friend} />))}
</ul>
}