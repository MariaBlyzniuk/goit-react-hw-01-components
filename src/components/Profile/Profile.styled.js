import styled from "styled-components";

export const Wrapper = styled.div`
border: 2px solid ${(p) => p.theme.colors.black};

padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 0 0 5px ${(p) => p.theme.colors.black};

margin-bottom: 5px;
`;

export const User = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom:20px;
font-weight: 700;
font-size: 20px;
`;

export const UserInfo = styled.div`
:not(:last-child){
    margin-bottom: 10px;
}
`;

export const UserStats = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
font-style: normal;
margin-bottom: 10px;
list-style: none;
`;

export const UserStatsItem = styled.li`
display: flex;
align-items: center;
flex-direction: column;
:not(:last-child){
    margin-right: 10px;
}
border: 1px solid ${(p) => p.theme.colors.gray};
border-radius: 25px;
padding: 20px;
font-weight: 500;
`;