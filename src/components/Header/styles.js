import styled from "styled-components";
import { styleGuide } from "../../styles/Globals";
const { colors } = styleGuide;

export const CompHeader = styled.header`
    max-width: 100vw;
    display: flex;
    justify-content: center;
    background-color: ${colors.neutral.White};
`;

export const Container = styled.nav`
    padding: 20px 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        @media (max-width: 1023px) {
            display: none;
        }
    }
`;

export const Logo = styled.div`
    @media (max-width: 374px) {
        img {
            width: 110px;
        }
    }
`;
