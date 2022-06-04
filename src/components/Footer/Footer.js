import React from "react";
import ButtonAndCopy from "./ButtonAndCopy/ButtonAndCopy";
import NavigationItems from "./NavigationItems/NavigationItems";
import SocialMedias from "./SocialMedias/SocialMedias";
import { CompFooter, Container } from "./styles";

function Footer() {
    return (
        <CompFooter>
            <Container>
                <SocialMedias />
                <NavigationItems />
                <ButtonAndCopy />
            </Container>
        </CompFooter>
    );
}

export default Footer;
