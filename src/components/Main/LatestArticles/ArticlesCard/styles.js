import styled from "styled-components";
import { styleGuide } from "../../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 20px;
`;

export const Card = styled.div`
    background-color: ${colors.neutral.White};
    border-radius: 5px;

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
`;

export const Author = styled.span`
    color: ${colors.neutral.GrayishBlue};
    font-size: 0.75rem;
`;

export const Title = styled.a`
    font-weight: 400;
    color: ${colors.primary.DarkBlue};
    transition: 0.5s;

    @media (min-width: 1024px) {
        :hover {
            color: ${colors.primary.LimeGreen};
        }
    }
`;

export const Text = styled.p`
    font-size: 0.875rem;
    color: ${colors.neutral.GrayishBlue};
    line-height: 20px;
`;
