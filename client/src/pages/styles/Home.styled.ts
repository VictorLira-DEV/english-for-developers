import styled from 'styled-components';

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
        transform: translateX(50%);
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

    @media screen and (max-width: ${({ theme }) => theme.laptop}) {
        padding: 40px 20px;
        height: 100vh;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        flex-direction: column;
        justify-content: space-evenly;
        h1 {
            font-size: 1.1rem;
        }

        img {
            width: 70%;
        }

        .home__arrow {
            width: 50px;
            bottom: -20px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        img {
            width: 90%;
        }
    }
`;

export const Cards = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 200px 60px;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        padding: 100px 20px;
    }
`;

export const HomeWrapper = styled.div`
    .home__footer {
        background: rgb(11, 91, 160);
        color: white;
        bottom: 0;
        width: 100%;
    }
`;
