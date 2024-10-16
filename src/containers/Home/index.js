import React from "react";

import HomeLogo from "../../assets/home-logo.svg";

import { Container, HomeImg } from "./styles";
import CategoyCarousel from "../../components/CategoryCarousel";

function Home() {
    return (
        <Container>
            <HomeImg src={HomeLogo} alt="logo da home" />
            <CategoyCarousel/>
        </Container>
    )
}

export default Home