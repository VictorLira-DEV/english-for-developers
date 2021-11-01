import React, { useState, useRef, useEffect, useContext } from "react";
import { StickyHeaderContext } from "../../context/sticky-header/stickyHeader";
import classes from "./styles/Home.module.css";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
    const containterRef = useRef(null);
    const [isVisisble, setIsVisible] = useState(false);
    const scrollIntoView = useRef<HTMLDivElement>(null);

    const callbackFunction = (entries: any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
        console.log(isVisisble);
    };

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4, //porcentagem do viewport
    };

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (containterRef.current) observer.observe(containterRef.current);

        return () => {
            if (containterRef.current)
                observer.unobserve(containterRef.current);
        };
    }, [containterRef, options]);

    const scroll = (e: React.FormEvent) => {
        e.preventDefault();
        scrollIntoView.current?.scrollIntoView({ behavior: "smooth" });
    };

    //stycky header
    const headerCTX = useContext(StickyHeaderContext);
    const headerFunction = (entries: any) => {
        const [entry] = entries;
        headerCTX.intersectingFunction(entry.isIntersecting);
    };

    const headerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.9, //porcentagem do viewport
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            headerFunction,
            headerOptions
        );
        if (containterRef.current) observer.observe(containterRef.current);

        return () => {
            if (containterRef.current)
                observer.unobserve(containterRef.current);
        };
    }, [headerFunction, headerOptions]);

    return (
        <React.Fragment>
            <div
                className={`${classes.container} ${
                    headerCTX.isIntersectingValue &&
                    classes["sticky-header---active"]
                }`}
            >
                <div className={classes.home}>
                    <img src="./adventure.svg" />
                    <div>
                        <h1>
                            Aprenda os phrasal verbs e as expressões mais usadas
                            do inglês, de forma
                            <span> totalmente gratuita </span>, será necessário
                            o
                            <span>
                                cadastro para ter acesso ao material sobre
                                "expressões"
                            </span>
                        </h1>
                        <div className={classes.buttons}>
                            <Button onClick={scroll} className={classes.about}>
                                Sobre
                            </Button>
                            <Link to="/login">
                                <Button className={classes.signup}>
                                    Ja tenho um conta
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <img id={classes.arrow} src="./arrow.png" />
                </div>
                <section ref={scrollIntoView} id="scroll">
                    <div ref={containterRef} className={classes["section"]}>
                        <div
                            className={`${classes["section-item"]} ${
                                !isVisisble && classes["section-1__hidden"]
                            } `}
                        >
                            <img src="./viagem.jpg" />
                            <div
                                className={`${classes["section-text"]} ${classes["text--1"]} `}
                            >
                                <h2>Viagens</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus quasi
                                    perferendis ducimus. Sed aperiam neque
                                    inventore modi architecto quae saepe unde
                                    perferendis fugit ex nisi beatae debitis
                                    iste, quasi voluptatibus?{" "}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${classes["section-item"]} ${
                                !isVisisble && classes["section-2__hidden"]
                            } `}
                        >
                            <img src="./promotion.png" />
                            <div
                                className={`${classes["section-text"]} ${classes["text--2"]}`}
                            >
                                <h2>Elevação na carreira</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus quasi
                                    perferendis ducimus. Sed aperiam neque
                                    inventore modi architecto quae saepe unde
                                    perferendis fugit ex nisi beatae debitis
                                    iste, quasi voluptatibus?{" "}
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${classes["section-item"]} ${
                                !isVisisble && classes["section-3__hidden"]
                            } `}
                        >
                            <img src="./viagem.jpg" />
                            <div
                                className={`${classes["section-text"]} ${classes["text--3"]}`}
                            >
                                <h2>Acesso a Informações</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Doloribus quasi
                                    perferendis ducimus. Sed aperiam neque
                                    inventore modi architecto quae saepe unde
                                    perferendis fugit ex nisi beatae debitis
                                    iste, quasi voluptatibus?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer className={classes.footer} />
            </div>
        </React.Fragment>
    );
};

export default Home;
