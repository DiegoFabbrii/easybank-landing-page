import React from "react";
import { navigationsItemsData } from "./NavigationItemsData";
import { Container } from "./styles";

function NavigationItems() {
    return (
        <Container>
            {navigationsItemsData.map((item, index) => {
                return (
                    <li key={index}>
                        <a href="#">{item.title}</a>
                    </li>
                );
            })}
        </Container>
    );
}

export default NavigationItems;
