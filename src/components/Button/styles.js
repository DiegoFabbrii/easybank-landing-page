import styled from "styled-components";
import { styleGuide } from "../../styles/Globals";
const { colors } = styleGuide;

export const Btn = styled.button`
    padding: 12px 35px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    color: ${colors.neutral.White};
    background: linear-gradient(
        to right,
        ${colors.primary.LimeGreen},
        ${colors.primary.BrightCyan}
    );
    transition: 0.3s;

    @media (min-width: 1024px) {
        :hover {
            filter: brightness(1.2);
        }
    }
`;
