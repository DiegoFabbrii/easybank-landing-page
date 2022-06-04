import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.ul`
    display: grid;
    gap: 15px;

    a {
        color: ${colors.neutral.LightGrayishBlue};
        transition: 0.3s;
    }

    @media (min-width: 1024px) {
        width: 35%;
        justify-content: space-between;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        text-align: initial;

        a:hover {
            color: ${colors.primary.LimeGreen};
        }
    }

    @media (max-width: 374px) {
        font-size: 0.875rem;
    }
`;
