import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";
const { colors } = styleGuide;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 30px;

    @media (min-width: 1024px) {
        margin-top: 0;
        button {
            align-self: flex-end;
        }
    }
`;

export const Copy = styled.span`
    font-size: 0.875rem;
    color: ${colors.neutral.GrayishBlue};
`;
