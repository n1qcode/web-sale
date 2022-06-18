import {SliderProps} from "./Slider.props";
import styles from './Slider.module.css';
import React, {FC, /* useEffect, useRef,*/ useState} from "react";
// import {Htag} from "../Htag/Htag";
// import {P} from "../P/P";
import slide1 from "./slide1.png";
import slide2 from "./slide2.png";
import slide3 from "./slide3.png";
import slide4 from "./slide4.png";
import slide5 from "./slide5.png";
import slide6 from "./slide6.png";
import {Button} from "../Button/Button";
import cn from "classnames";

const IMG_WIDTH = 240;

export const Slider: FC<SliderProps> = () => {
    const [value, setValue] = useState(0);

    // const img = [
    //     <img key={slide1} src={slide1} alt=''/>,
    //     <img key={slide2} src={slide2} alt=''/>,
    //     <img key={slide3} src={slide3} alt=''/>,
    //     <img key={slide4} src={slide4} alt=''/>,
    //     <img key={slide5} src={slide5} alt=''/>,
    //     <img key={slide6} src={slide6} alt=''/>
    // ];

    // Индекс текущего слайда
//     const [activeIndex, setActiveIndex] = useState(0);
//
//     const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();
//
// // Хук Effect
//     useEffect(() => {
//         // Запускаем интервал
//         intervalRef.current = setInterval(() => {
//             // Меняем состояние
//             setActiveIndex((current) => {
//                 // Вычисляем и возвращаем индекс следующего слайда, который должен вывестись
//                 return current === img.length - 1 ? 0 : current + 1;
//             });
//         }, 3000);
// // Выключаем интервал
//         return () => clearInterval(intervalRef.current);
//     }, []);

    const prevSlide = () => {
        value < 3 && setValue(value + 1);
    };

    const nextSlide = () => {
        value !== 0 && setValue(value - 1);
    };

    return (
        <div className={styles.slider}>
            <Button className={`${cn({
                [styles.hidden]: value === 3,
            })} ${styles.btnLeft}`} appearance="ghost" arrow='left' onClick={prevSlide}></Button>
            <div className={styles.imgs}>
                <ul style={{transform: `translateX(-${value*IMG_WIDTH}px)`}}>
                    <li><img src={slide1} alt="slide1"/></li>
                    <li><img src={slide2} alt="slide2"/></li>
                    <li><img src={slide3} alt="slide3"/></li>
                    <li><img src={slide4} alt="slide4"/></li>
                    <li><img src={slide5} alt="slide5"/></li>
                    <li><img src={slide6} alt="slide6"/></li>
                </ul>
            </div>
            <Button className={`${cn({
                [styles.hidden]: value === 0,
            })} ${styles.btnRight}`} appearance="ghost" arrow='right' onClick={nextSlide}></Button>
        </div>
    );
};
