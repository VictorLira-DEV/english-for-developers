import React from 'react';
import { StyledCard } from './styles/Card.styled'

interface Icard {
    aos: string;
    aos_offset: string;
    color: string;
    title: string;
    text: string;
    image: string;
}

export default function Card(props: Icard) {
    const { aos, aos_offset, color, text, title, image } = props

    return (
        <StyledCard
            color={color}
            data-aos={aos}
            data-aos-offset={aos_offset}
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
        >
            <img src={image} alt="tripBG" />
            <div>
                <h2> {title} </h2>
                <p>
                    {text}
                </p>
            </div>
        </StyledCard>
    );
}
