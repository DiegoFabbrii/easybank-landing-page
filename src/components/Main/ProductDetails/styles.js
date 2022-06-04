import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";
const { colors } = styleGuide;

export const CompSection = styled.section`
    display: flex;
    justify-content: center;
    background-color: ${colors.neutral.LightGrayishBlue};
`;

export const Container = styled.div`
    width: 80%;
    padding: 80px 0;
`;

export const TextContent = styled.div`
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;

    @media (min-width: 1024px) {
        text-align: initial;
        align-items: initial;
    }
`;

export const Title = styled.h2`
    font-weight: 400;
    color: ${colors.primary.DarkBlue};

    @media (min-width: 1024px) {
        font-size: 2rem;
    }
`;

export const Text = styled.p`
    max-width: 570px;
    color: ${colors.neutral.GrayishBlue};
    line-height: 25px;

    @media (max-width: 374px) {
        font-size: 0.875rem;
    }
`;
