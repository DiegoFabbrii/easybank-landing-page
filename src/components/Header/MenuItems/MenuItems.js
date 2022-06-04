import React, { useContext } from "react";
import { Background, Container } from "./styles";
import { MenuItemsData } from "./MenuItemsData";
import { MenuContexts } from "../../Context/contexts";

function MenuItems() {
    const { isOpen } = useContext(MenuContexts);

    return (
        <Background isOpen={isOpen}>
            <Container isOpen={isOpen}>
                {MenuItemsData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#">{item.title}</a>
                        </li>
                    );
                })}
            </Container>
        </Background>
    );
}

export default MenuItems;
