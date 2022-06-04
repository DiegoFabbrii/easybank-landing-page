import styled from "styled-components";
import { styleGuide } from "../../styles/Globals";
const { colors } = styleGuide;

export const CompMain = styled.main`
    display: flex;
    flex-direction: column;
    background-color: ${colors.neutral.VeryLightGray};

    @media (min-width: 1024px) {
        overflow: hidden;
    }
`;
