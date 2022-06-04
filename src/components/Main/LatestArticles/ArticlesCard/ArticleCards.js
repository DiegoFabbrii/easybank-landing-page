import React from "react";
import { articlesData } from "./ArticlesData";
import { Author, Card, Container, Text, TextContent, Title } from "./styles";

function ArticleCards() {
    return (
        <Container>
            {articlesData.map((item, index) => {
                return (
                    <Card key={index}>
                        <img src={item.img} alt={item.alt} />
                        <TextContent>
                            <Author>{item.author}</Author>
                            <Title href="#">{item.title}</Title>
                            <Text>{item.text}</Text>
                        </TextContent>
                    </Card>
                );
            })}
        </Container>
    );
}

export default ArticleCards;
