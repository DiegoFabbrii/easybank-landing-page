import React from "react";
import { Container, Copy } from "./styles";
import Button from "../../Button/Button";

function ButtonAndCopy() {
    return (
        <Container>
            <Button />
            <Copy>&copy; Easybank. All Rights Reserved</Copy>
        </Container>
    );
}

export default ButtonAndCopy;
