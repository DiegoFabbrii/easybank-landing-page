import React from "react";
import { CompHeader, Logo, Container } from "./styles";
import LogoImg from "../../assets/images/logo.svg";
import MenuItems from "./MenuItems/MenuItems";
import HamburgerBtn from "./HamburgerBtn/HamburgerBtn";
import Button from "../Button/Button";

function Header() {
    return (
        <CompHeader>
            <Container>
                <Logo>
                    <a href="#">
                        <img src={LogoImg} alt="Logo" />
                    </a>
                </Logo>

                <MenuItems />
                <HamburgerBtn />
                <Button />
            </Container>
        </CompHeader>
    );
}

export default Header;
