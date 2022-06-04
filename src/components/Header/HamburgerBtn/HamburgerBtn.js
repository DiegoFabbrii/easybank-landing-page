import React, { useContext } from "react";
import { MenuContexts } from "../../Context/contexts";
import { Container } from "./styles";

function HamburgerBtn() {
    const { isOpen, btnHandleClick } = useContext(MenuContexts);

    return (
        <Container isOpen={isOpen} onClick={btnHandleClick}>
            <span></span>
        </Container>
    );
}

export default HamburgerBtn;
