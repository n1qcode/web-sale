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
import {FC, useState} from "react";

const IMG_WIDTH = 387;

export const Slider: FC<SliderProps> = () => {
    const [value, setValue] = useState(0);
    const { isMobile } = useMathMedia();

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

    const prevSlide = () => value < 3 && setValue(value + 1);
    const nextSlide = () => value !== 0 && setValue(value - 1);

    return (
        <div className={styles.sliderBlock}>
            <Htag tag='h1' className={styles.header}>Наши услуги</Htag>
            <P size="l" className={styles.text}>Разработаем дизайн, наполним сайт продающим контентом, возьмем все
                головные боли разработки сайта на себя.
            </P>
            <div className={styles.slider}>
                <Button className={`${cn({
                    [styles.hidden]: value === 3,
                })} ${styles.btnLeft}`} appearance="ghost" arrow='left' onClick={prevSlide}></Button>
                <div className={styles.imgs}>
                    <ul style={{transform: `translateX(-${value * IMG_WIDTH}px)`}}>
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
            {isMobile &&
                <div className={styles.sliderDots}>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 1
                })}`} onClick={() => console.log('hello')}></span>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 2
                })}`} onClick={() => console.log('hello')}></span>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 3
                })}`} onClick={() => console.log('hello')}></span>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 4
                })}`} onClick={() => console.log('hello')}></span>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 5
                })}`} onClick={() => console.log('hello')}></span>
                <span className={`${styles.dot} ${cn({
                    [styles.dotActive]: value === 6
                })}`} onClick={() => console.log('hello')}></span>
            </div>
            }
        </div>
    );
};
