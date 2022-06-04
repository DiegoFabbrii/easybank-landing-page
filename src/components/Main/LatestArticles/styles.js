import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";
const { colors } = styleGuide;

export const CompSection = styled.section`
    display: flex;
    justify-content: center;
    background-color: ${colors.neutral.VeryLightGray};
    padding: 80px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 80%;
`;

export const Title = styled.h2`
    font-weight: 400;
    color: ${colors.primary.DarkBlue};
`;
