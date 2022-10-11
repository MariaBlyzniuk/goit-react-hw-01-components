import styled from "styled-components";

export const FriendsInfo = styled.ul`
display: flex;
margin-bottom: 5px;

`; 
export const FriendsItem = styled.li`
display: flex;
border: 2px solid ${(p) => p.theme.colors.black};
box-shadow: 0 0 5px ${(p) => p.theme.colors.black};
width: 311px;
padding: 10px;
background-color: ${(p) => {
    return p.isOnline ? p.theme.colors.accent : p.theme.colors.gray;
}};
`; 
export const FriendName = styled.p`
display: flex;
align-self: center;
margin-left: 20px;
font-weight: 700;
`; 

