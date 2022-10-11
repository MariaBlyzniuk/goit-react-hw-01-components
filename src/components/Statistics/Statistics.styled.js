import styled from "styled-components";

export const Wrapper = styled.section`
border: 2px solid ${(p) => p.theme.colors.black};
box-shadow: 0 0 5px ${(p) => p.theme.colors.black};
background-color: lightgray;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 5px;
`;

export const Title = styled.h2`
padding: 20px;
margin-bottom: 15px;
`;

export const StatsList = styled.ul`
display: flex;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding: 11px;
border: 1px solid gray;
`;

export const StatsInfo = styled.span`
display: flex;
flex-direction: column;
align-items: center;
font-weight: 500;
padding: 5px;
`;
