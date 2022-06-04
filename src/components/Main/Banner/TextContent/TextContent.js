import React from "react";
import Button from "../../../Button/Button";
import { Container, Title, Text } from "./styles";

function TextContent() {
    return (
        <Container>
            <Title>Next generation digital banking</Title>
            <Text>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing and
                much more.
            </Text>
            <Button />
        </Container>
    );
}

export default TextContent;
