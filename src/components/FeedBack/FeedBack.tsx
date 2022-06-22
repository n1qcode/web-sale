import {FeedBackProps} from "./FeedBack.props";
import styles from './FeedBack.module.css';
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
// import {useMathMedia} from "../../hooks/useMathMedia";
import React, {FC} from "react";
import {Button} from "../Button/Button";
import FeedbackLogo from './feedback.png';


export const FeedBack: FC<FeedBackProps> = () => {
    // const {isMobile, isTablet, isDesktop} = useMathMedia();

    return (
        <div className={styles.feedbackBlock}>
            <Htag tag='h2' className={styles.header}>Хотите качественный сайт без головной боли?</Htag>
            <P size="l" className={styles.text}>Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта.</P>
            <div className={styles.feedback}>

            </div>
            <div className={styles.personal}>
                <input className={styles.checkbox} type="checkbox" id='check'/>
                <label htmlFor="check">Я согласен с условиями обработки</label> <a className={styles.link} href="#">персональных данных</a>
            </div>
            <Button className={styles.button} appearance={"primary"} volume={"standard"}>Отправить</Button>
            <img className={styles.logo} src={FeedbackLogo} alt=""/>
        </div>
    );
};
