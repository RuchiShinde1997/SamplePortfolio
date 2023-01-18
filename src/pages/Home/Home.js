import React from 'react';
import { HomeContainer, BackgroundImg, Name } from './Home.styled';
let HomeImage = require("../../images/home-page-background.png");

function Home(){
    return (
        <>
        <HomeContainer>
            <BackgroundImg src={HomeImage} alt="architect"/>
            <Name>Sample Text</Name>
        </HomeContainer>
        </>

    );

};

export default Home;