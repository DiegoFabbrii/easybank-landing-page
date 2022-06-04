import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";

const { colors } = styleGuide;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    cursor: pointer;

    span {
        width: 30px;
        height: 2px;
        background-color: ${({ isOpen }) =>
            isOpen ? "transparent" : `${colors.neutral.GrayishBlue}`};
        transition: 0.3s;
        position: relative;

        ::before,
        ::after {
            content: "";
            position: absolute;
            width: 30px;
            height: 2px;
            background-color: ${colors.neutral.GrayishBlue};
            transition: 0.3s;
        }

        ::before {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(-45deg)" : "translateY(-6px)"};
        }

        ::after {
            transform: ${({ isOpen }) =>
                isOpen ? "rotate(45deg)" : "translateY(6px)"};
        }
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;
