import React from "react";
import { BgBannerImg, Container } from "./styles";
import mockupsMob from "../../../assets/images/image-mockups (1).png";
import mockupsDesk from "../../../assets/images/image-mockups.png";
import TextContent from "./TextContent/TextContent";

function Banner() {
    return (
        <Container>
            <BgBannerImg>
                <picture>
                    <source media="(min-width: 1024px)" srcSet={mockupsDesk} />
                    <img src={mockupsMob} alt="Smartphone" />
                </picture>
            </BgBannerImg>
            <TextContent />
        </Container>
    );
}

export default Banner;
