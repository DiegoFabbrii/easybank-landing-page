import styled from "styled-components";
import { styleGuide } from "../../../styles/Globals";

const { colors } = styleGuide;

export const Background = styled.div`
    display: flex;
    opacity: 1;
    z-index: 1;

    @media (max-width: 1023px) {
        justify-content: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 70px;
        bottom: 0;
        background-color: #00000070;
        opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
        z-index: ${({ isOpen }) => (isOpen ? "1" : "-1")};
        transition: 0.3s;
    }
`;

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${colors.neutral.White};

    position: absolute;
    width: 80vw;
    top: 30px;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;

    a {
        color: ${colors.primary.DarkBlue};
    }

    @media (max-width: 1023px) {
        transform: ${({ isOpen }) => (isOpen ? "scale(1)" : "scale(0)")};
    }

    @media (min-width: 1024px) {
        position: initial;
        padding: 0;
        flex-direction: row;
        width: auto;
        border-radius: none;

        a {
            color: ${colors.neutral.GrayishBlue};
            transition: 0.3s;
        }

        li {
            position: relative;

            ::after {
                content: "";
                position: absolute;
                width: 100%;
                height: 4px;
                left: 0;
                bottom: -30px;
                background: linear-gradient(
                    to right,
                    ${colors.primary.LimeGreen},
                    ${colors.primary.BrightCyan}
                );
                transform: scaleX(0);
                transition: 0.3s;
            }

            :hover a {
                color: ${colors.primary.DarkBlue};
            }

            :hover::after {
                transform: scaleX(1);
            }
        }
    }
`;
