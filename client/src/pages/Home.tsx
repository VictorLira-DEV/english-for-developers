import React, { useEffect, useRef } from 'react';
import { Container } from '../components/styles/Container.styled';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { About, Cards, HomeWrapper } from './styles/Home.styled';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
    const scrollIntoView = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Aos.init();
    }, []);

    const scroll = (e: React.FormEvent) => {
        e.preventDefault();
        scrollIntoView.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HomeWrapper>
            <Container>
                <About>
                    <img
                        src="./adventure.svg"
                        alt="adventureBG"
                        data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                    />
                    <div
                        data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="600"
                    >
                        <h1>
                            Aprenda os phrasal verbs e as expressões mais usadas
                            do inglês, de forma
                            <span> totalmente gratuita </span>, será necessário
                            o <span />
                            <span>
                                cadastro para ter acesso ao material sobre
                                "expressões"
                            </span>
                        </h1>
                        <div>
                            <div className="home__buttons">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={scroll}
                                    className="home__btn--about"
                                >
                                    Sobre
                                </motion.button>

                                <Link to="/login">
                                    <motion.button
                                        whileTap={{ scale: 0.9 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="home__btn--signup"
                                    >
                                        Ja tenho um conta
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <img className="home__arrow" src="./arrow.png" />
                </About>
            </Container>
            <Cards>
                <Card
                    image="./grecia.png"
                    aos="fade-right"
                    aos_offset="200"
                    title="Viagens"
                    color="red"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quasi perferendis ducimus. Sed aperiam neque
                    inventore modi architecto quae saepe unde perferendis fugit
                    ex nisi beatae debitis iste, quasi voluptatibus?"
                />
                <Card
                    image="./promotion.png"
                    aos="fade-down"
                    aos_offset="200"
                    title="Elevação na carreira"
                    color="blue"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quasi perferendis ducimus. Sed aperiam neque
                    inventore modi architecto quae saepe unde perferendis fugit
                    ex nisi beatae debitis iste, quasi voluptatibus?"
                />
                <Card
                    image="./conhecimento.png"
                    aos="fade-left"
                    aos_offset="200"
                    title="Acesso a Informações"
                    color="purple"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus quasi perferendis ducimus. Sed aperiam neque
                    inventore modi architecto quae saepe unde perferendis fugit
                    ex nisi beatae debitis iste, quasi voluptatibus?"
                />
            </Cards>
            <Footer className="home__footer" />
        </HomeWrapper>
    );
};

export default Home;
