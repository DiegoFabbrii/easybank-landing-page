import styled from "styled-components";
import BannerBgMob from "../../../assets/images/bg-intro-mobile.svg";
import BannerBgDesk from "../../../assets/images/bg-intro-desktop.svg";

export const Container = styled.section`
    width: 100vw;
    align-self: flex-end;

    @media (min-width: 1024px) {
        width: 90vw;
        display: flex;
        flex-direction: row-reverse;
    }
`;

export const BgBannerImg = styled.div`
    background-image: url(${BannerBgMob});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    width: 100vw;

    img {
        width: 100%;
    }

    @media (min-width: 1024px) {
        background-image: url(${BannerBgDesk});
        background-position: -50px -270px;
        background-size: initial;
        width: 60vw;
        height: 580px;
        position: relative;

        img {
            position: absolute;
            top: -115px;
            right: -120px;
            max-height: auto;
            max-width: 700px;
        }
    }
`;
