import styled from 'styled-components';

export const HomeWrapper = styled.div`
    .home__footer{
        padding: 15px 60px;
        background: rgb(11, 91, 160);
        color: white;
        bottom: 0;
        width: 100%;
    }
`

export const About = styled.div`
    /* width: 1440px; */
    min-height: calc(100vh - 58px);
    background: rgb(9, 74, 130);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 40px 60px;
    position: relative;

    span:first-of-type {
        color: #12d8c1;
    }

    span:last-of-type {
        animation: outdoor 1.5s linear infinite;
        transition: 0.4s ease-in-out;
    }

    h1 {
        font-size: 1.4rem;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    img {
        width: 40%;
    }

    & > div {
        max-width: 650px;
    }

    .home__buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        .home__btn--about {
            background: #58cc02;
        }

        button {
            padding: 10px;
            width: 200px;
            border: none;
            border-radius: 4px;
            text-transform: uppercase;
            font-size: 0.9rem;
            font-weight: bolder;
            cursor: pointer;
            color: #fff;
            box-shadow: 3px 3px 6px rgb(0 0 0 / 50%);
        }

        .home__btn--about {
            background: #58cc02;
            margin: 40px 0 20px;
        }

        .home__btn--signup {
            background: #1899d6;
        }
    }

    .home__arrow {
        width: 70px;
        position: absolute;
        right: 50%;
        bottom: -30px;
    }

    @keyframes outdoor {
        0% {
            color: white;
        }

        50% {
            color: rgb(250, 118, 118);
        }

        100% {
            color: white;
        }
    }
`;

export const Cards = styled.section`
    display: flex;
    justify-content: space-around;
    padding: 200px 60px;
`;
