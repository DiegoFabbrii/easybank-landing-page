import React from "react";
import ArticleCards from "./ArticlesCard/ArticleCards";
import { CompSection, Container, Title } from "./styles";

function LatestArticles() {
    return (
        <CompSection>
            <Container>
                <Title>Latest Articles</Title>
                <ArticleCards />
            </Container>
        </CompSection>
    );
}

export default LatestArticles;
