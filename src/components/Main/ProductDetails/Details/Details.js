import React from "react";
import { detailsData } from "./DetailsData";
import { Card, Container, Title, Text } from "./styles";

function Details() {
    return (
        <Container>
            {detailsData.map((item, index) => {
                return (
                    <Card key={index}>
                        <img src={item.icon} alt={item.title} />
                        <Title>{item.title}</Title>
                        <Text>{item.text}</Text>
                    </Card>
                );
            })}
        </Container>
    );
}

export default Details;
