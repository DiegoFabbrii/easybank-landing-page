import React from "react";
import logo from "../../../assets/images/logo-footer.svg";
import { socialMediasData } from "./SocialMediasData";
import { Container, Logo, SocialMediasIcons } from "./styles";

function SocialMedias() {
    return (
        <Container>
            <Logo href="#">
                <img src={logo} alt="Logo" />
            </Logo>
            <SocialMediasIcons>
                {socialMediasData.map((item, index) => {
                    return (
                        <a key={index} href="#">
                            {item.icon}
                        </a>
                    );
                })}
            </SocialMediasIcons>
        </Container>
    );
}

export default SocialMedias;
