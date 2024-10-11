import React from "react";

import Category from "../../assets/category.png";

import { Container, CategoryImg } from "./styles";

function CategoyCarousel() {
    return (
        <Container>
            <CategoryImg src={Category} alt="logo da categoria" />
        </Container>
    )
}

export default CategoyCarousel