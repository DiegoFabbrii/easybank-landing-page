import styled from "styled-components";
import { styleGuide } from "../../styles/Globals";
const { colors } = styleGuide;

export const CompFooter = styled.footer`
    background-color: ${colors.primary.DarkBlue};
    padding: 50px 0;
    display: flex;
    justify-content: center;
`;

export const Container = styled.nav`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        max-height: 100px;
    }
`;
