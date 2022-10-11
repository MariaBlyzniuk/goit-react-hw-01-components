import styled from "styled-components";

export const PageWrapper = styled.div`

border: thick double ${(p) => p.theme.colors.black};
background-color: lightgray;

display: flex;
flex-direction: column;
align-items: center;
`;