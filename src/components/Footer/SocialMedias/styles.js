import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    @media (min-width: 1024px) {
        justify-content: space-between;
    }
`;

export const Logo = styled.a`
    img {
        width: 140px;
    }
`;

export const SocialMediasIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 30px 0;

    svg {
        font-size: 26px;
        color: ${colors.neutral.White};
        transition: 0.3s;
    }

    @media (min-width: 1024px) {
        svg:hover {
            color: ${colors.primary.LimeGreen};
        }

        margin: 0;
    }
`;
