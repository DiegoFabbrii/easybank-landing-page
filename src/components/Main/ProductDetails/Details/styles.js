import styled from "styled-components";
import { styleGuide } from "../../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    img {
        width: 50px;
    }

    @media (min-width: 1024px) {
        text-align: initial;
        align-items: initial;
    }
`;

export const Title = styled.h3`
    font-weight: 400;
    color: ${colors.primary.DarkBlue};
`;

export const Text = styled.p`
    font-size: 0.875rem;
    color: ${colors.neutral.GrayishBlue};
    line-height: 20px;
`;
