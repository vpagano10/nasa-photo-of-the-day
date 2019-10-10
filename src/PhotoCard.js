import React from 'react';
import styled from 'styled-components';
import {rotate, Rocket, morph, Star} from './App';

const CardDisplay = styled.div`
    margin: 2%;
`;
const ImgTitle = styled.h2`
    font-size: 1.6rem;
    color: rgba(30, 255, 218, 0.61);
`;
const ImgDate = styled.h2`
    font-size: 1.4rem;
    color: rgb(30, 255, 218, 0.61);
`;
const Pic = styled.img`
    max-width: 100%;
    max-height: 500px;
    &:hover {
        transform: scale(1.5);
    }
`;
const WhatsThis = styled.p`
    font-size: 1.6rem;
    line-height: 1.5;
    color: rgb(30, 255, 218);
`;
const Explanation = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
    color: rgb(30, 203, 255, 0.75);
`;
const DateButton = styled.button`
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.5%;
    border-radius: 5px;
    border: 2px solid rgb(30, 255, 218, 0.61);
    margin: 0% .5% 0% 0%;
    background-color: transparent;
    color: dodgerblue;
    // &:hover {
    //     background-color: dodgerblue;
    //     color: rgb(7, 30, 56);
    // }
`;
const ExplanationButton = styled(DateButton)`
    padding: 1%;
    border: 4px solid rgb(30, 255, 218, 0.61);
    color: rgb(30, 255, 218);
    // &:hover {
    //     background-color: rgb(30, 255, 218, 0.75);
    //     color: black;
    // }
`;

const PhotoCard = props => {
    return (
        <>
            <CardDisplay key={props.id}>
                <ImgTitle>{`${props.title}`}</ImgTitle>
                <ImgDate><DateButton>Date{`: ${props.date}`}</DateButton></ImgDate>
                <Pic alt='nasa pic of the day' src={`${props.pic}`} />
                <WhatsThis><ExplanationButton>What do we see here?</ExplanationButton></WhatsThis>
                <Explanation>{`${props.explanation}`}</Explanation>
            </CardDisplay>
        </>
    );
};

export default PhotoCard;