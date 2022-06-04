import React from "react";
import Banner from "./Banner/Banner";
import LatestArticles from "./LatestArticles/LatestArticles";
import ProductDetails from "./ProductDetails/ProductDetails";
import { CompMain } from "./styles";

function Main() {
    return (
        <CompMain>
            <Banner />
            <ProductDetails />
            <LatestArticles />
        </CompMain>
    );
}

export default Main;
