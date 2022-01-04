import React, { useState, useEffect } from 'react';
import classes from './styles/Slider.module.css';
import SliderItem from './Slider-item/SliderItem';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import testimonial_1 from '../../assets/testimonial-1.jpg';
import Button from '../button/Button';

const Slider = () => {
    const [slider, setSlider] = useState({
        n1: 0,
        n2: -100,
        n3: -200,
    });

    const moveToLeft = (event: React.FormEvent) => {
        event.preventDefault();
        setSlider(prev => {
            const previous = { ...prev };
            return {
                n1: previous.n1 + 100,
                n2: previous.n2 + 100,
                n3: previous.n3 + 100,
            };
        });
    };

    const moveToRight = (event: React.FormEvent) => {
        setSlider(prev => {
            const previous = { ...prev };
            return {
                n1: previous.n1 - 100,
                n2: previous.n2 - 100,
                n3: previous.n3 - 100,
            };
        });
    };

    const sliderTimer = () => {
        setSlider(prev => {
            const previous = { ...prev };
            return {
                n1: previous.n1 + 100,
                n2: previous.n2 + 100,
                n3: previous.n3 + 100,
            };
        });
    };

    const reset = (direction: string) => {
        if (direction === 'right') {
            setSlider(() => {
                return {
                    n1: 0,
                    n2: -100,
                    n3: -200,
                };
            });
        } else {
            setSlider(() => {
                return {
                    n1: 200,
                    n2: 100,
                    n3: 0,
                };
            });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            sliderTimer();
        }, 6000);
        return () => {
            clearInterval(timer);
        };
    }, [slider]);

    //hardcoded slider because the "src" is not comming from  a API
    let slider_1 = {
        transform: `translateX(${slider.n1 < 0 ? reset('left') : slider.n1}%)`,
    };
    let slider_2 = { transform: `translateX(${slider.n2}%)` };
    let slider_3 = {
        transform: `translateX(${slider.n3 > 0 ? reset('right') : slider.n3}%)`,
    };

    return (
        <div className={classes.slider}>
            <div className={classes.controls}>
                <Button id="left" onClick={moveToLeft}>
                    <BsArrowLeft />
                </Button>
                <Button id="right" onClick={moveToRight}>
                    <BsArrowRight />
                </Button>
            </div>
            <div className={classes['slide-content']}>
                <SliderItem
                    className={`${classes.slider_item}`}
                    style={slider_1}
                    src={'https://randomuser.me/api/portraits/women/3.jpg'}
                    name="Karol dias."
                    profession="Developer"
                    sliderItem="Interface simples e limpa, muito obrigada, consegui aprender mais expressões para compreender os falantes nativos"
                />
                <SliderItem
                    className={classes.slider_item}
                    style={slider_2}
                    src={'https://randomuser.me/api/portraits/women/32.jpg'}
                    name="Luna Davys"
                    profession="Lawyer"
                    sliderItem="Continue adicionando mais phrasal verbs! está me ajudando muito"
                />
                <SliderItem
                    className={classes.slider_item}
                    style={slider_3}
                    src={'https://randomuser.me/api/portraits/men/3.jpg'}
                    name="Robert Silvester"
                    profession="Designer"
                    sliderItem="Muito bom, essas expressões e phrasal verbs realmente são muito usado no dia a dia"
                />
            </div>
        </div>
    );
};

export default Slider;
