import styled from "styled-components";
import { styleGuide } from "../../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    text-align: center;
    padding: 20px 0;

    @media (min-width: 1024px) {
        width: 40vw;
        text-align: left;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const Title = styled.h1`
    color: ${colors.primary.DarkBlue};
    max-width: 80%;
    font-size: 2.25rem;
    font-weight: 300;

    @media (min-width: 1024px) {
        font-size: 3rem;
        max-width: 500px;
    }

    @media (max-width: 374px) {
        font-size: 1.75rem;
    }
`;

export const Text = styled.p`
    color: ${colors.neutral.GrayishBlue};
    line-height: 25px;
    width: 80%;
    text-align: center;

    @media (min-width: 1024px) {
        max-width: 500px;
        text-align: initial;
    }

    @media (max-width: 374px) {
        font-size: 0.875rem;
    }
`;
