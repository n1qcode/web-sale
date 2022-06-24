import {SliderProps} from "./Slider.props";
import styles from './Slider.module.css';
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";
import slide3 from "./slide3.png";
import slide4 from "./slide4.png";
import slide5 from "./slide5.png";
import slide6 from "./slide6.png";
import {Button} from "../Button/Button";
import cn from "classnames";
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
import {useMathMedia} from "../../hooks/useMathMedia";
import {FC, useEffect, useRef, useState} from "react";

const [IMG_WIDTH_BIG, IMG_WIDTH_SMALL]: number[] = [387, 200];

export const Slider: FC<SliderProps> = () => {
    const [value, setValue] = useState(0);
    const [side, setSide] = useState('left');
    const {isMobile, isTablet, isDesktop} = useMathMedia();
    const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();
    const sliderValuesRef = useRef({value, side, isMobile, isTablet, isDesktop});

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            carousel();
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        sliderValuesRef.current = {value, side, isMobile, isTablet, isDesktop};
    }, [value, side, isMobile, isTablet, isDesktop]);

    function carousel() {
        const {value, side, isMobile, isTablet, isDesktop} = sliderValuesRef.current;
        if (isMobile || isTablet) {
            moveSlides(value, side,5);
        } else if (isDesktop) {
            moveSlides(value,side,4);
        } else {
            moveSlides(value, side,3);
        }
    }

    function moveSlides(value, side, slide) {
        if (value === slide) {
            setSide('left');
            setValue((current) => current - 1);
        } else if (value === 0) {
            setSide('right');
            setValue((current) => current + 1);
        } else if (side === 'left') {
            setValue((current) => current - 1);
        } else if (side === 'right') {
            setValue((current) => current + 1);
        }
    }

    const prevSlide = () => value < sliderValue() && setValue(value + 1);
    const nextSlide = () => value !== 0 && setValue(value - 1);

    const sliderValue = (): number => {
        if (isMobile) return 5;
        else if (isTablet) return 5;
        else if (isDesktop) return 4;
        else return 3;
    };

    return (
        <div className={styles.sliderBlock}>
            <Htag tag='h1' className={styles.header}>Наши услуги</Htag>
            <P size="l" className={styles.text}>Разработаем дизайн, наполним сайт продающим контентом, возьмем все
                головные боли разработки сайта на себя.
            </P>
            <div className={styles.slider}>
                <Button className={`${cn({
                    [styles.hidden]: value === sliderValue(),
                })} ${styles.btnLeft}`} appearance="ghost" arrow='left' onClick={prevSlide}></Button>
                <div className={styles.imgs}>
                    <ul style={{transform: `translateX(-${value * (isMobile ? IMG_WIDTH_SMALL : IMG_WIDTH_BIG)}px)`}}>
                        <li>
                            <img src={slide1} alt="slide4"/>
                            <Htag tag='h3' className={styles.sliderHeader}>Создание сайтов</Htag>
                            <P size="s" className={styles.sliderText}>Создание сайтов с уникальным дизайном под ваши
                                цели </P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                        <li>
                            <img src={slide2} alt="slide5"/>
                            <Htag tag='h3' className={styles.sliderHeader}>Интернет-магазин</Htag>
                            <P size="s" className={styles.sliderText}>Создание сайтов с уникальным дизайном под ваши
                                цели </P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                        <li>
                            <img src={slide3} alt="slide6"/>
                            <Htag tag='h3' className={styles.sliderHeader}>CRM проекты</Htag>
                            <P size="s" className={styles.sliderText}>Создание сайтов с уникальным дизайном под ваши
                                цели </P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                        <li>
                            <img src={slide5} alt="slide2"/>
                            <Htag tag='h3' className={styles.sliderHeader}>Мобильная разработка </Htag>
                            <P size="s" className={styles.sliderText}>Создание мобильных приложений удобных для
                                пользования</P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                        <li>
                            <img src={slide4} alt="slide1"/>
                            <Htag tag='h3' className={styles.sliderHeader}>Nocode сайты</Htag>
                            <P size="s" className={styles.sliderText}>Создание сайтов на платформе Tilda быстро и
                                качественно</P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                        <li>
                            <img src={slide6} alt="slide3"/>
                            <Htag tag='h3' className={styles.sliderHeader}>Поддержка</Htag>
                            <P size="s" className={styles.sliderText}>Поддержка ваших сайтов и приложений, исправление
                                ошибок добавление контента</P>
                            <Button className={styles.button} appearance={"ghost"}
                                    arrow={'text'}>Подробнее &gt;</Button>
                        </li>
                    </ul>
                </div>
                <Button className={`${cn({
                    [styles.hidden]: value === 0,
                })} ${styles.btnRight}`} appearance="ghost" arrow='right' onClick={nextSlide}></Button>
            </div>
            {(isMobile || isTablet) &&
                <div className={styles.sliderDots}>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 0
                })}`} onClick={() => setValue(0)}></span>
                    <span className={`${styles.dot} ${cn({
                        [styles.dotActive]: value === 1
                    })}`} onClick={() => setValue(1)}></span>
                    <span className={`${styles.dot} ${cn({
                        [styles.dotActive]: value === 2
                    })}`} onClick={() => setValue(2)}></span>
                    <span className={`${styles.dot} ${cn({
                        [styles.dotActive]: value === 3
                    })}`} onClick={() => setValue(3)}></span>
                    <span className={`${styles.dot} ${cn({
                        [styles.dotActive]: value === 4
                    })}`} onClick={() => setValue(4)}></span>
                    <span className={`${styles.dot} ${cn({
                        [styles.dotActive]: value === 5
                    })}`} onClick={() => setValue(5)}></span>
                </div>
            }
        </div>
    );
};
