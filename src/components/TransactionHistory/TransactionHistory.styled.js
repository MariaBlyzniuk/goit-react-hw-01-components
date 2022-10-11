import styled from "styled-components";

export const ThHead = styled.th`
border: 2px solid ${(p) => p.theme.colors.black};
box-shadow: 0 0 5px ${(p) => p.theme.colors.black};
width: 103px;
`;

export const TdBody = styled.td`
border: 2px solid ${(p) => p.theme.colors.black};
text-align: center;
`;