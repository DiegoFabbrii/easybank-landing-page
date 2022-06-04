import React from "react";
import Details from "./Details/Details";
import { Container, TextContent, Title, Text, CompSection } from "./styles";

function ProductDetails() {
    return (
        <CompSection>
            <Container>
                <TextContent>
                    <Title>Why choose Easybank ?</Title>
                    <Text>
                        We leverage open banking to turn your bank account into
                        your financial hub. Control your finances like never
                        before.
                    </Text>
                </TextContent>
                <Details />
            </Container>
        </CompSection>
    );
}

export default ProductDetails;
