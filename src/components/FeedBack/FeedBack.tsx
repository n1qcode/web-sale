import {FeedBackProps} from "./FeedBack.props";
import styles from './FeedBack.module.css';
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
import React, {FC, useEffect} from "react";
import {Button} from "../Button/Button";
import FeedbackLogo from './feedback.png';
import useInput from "../../hooks/useInput";
import useFixTextArea from "../../hooks/useFixTextArea";
import {MAIL_ERRORS, MESSAGE_ERRORS, NAME_ERRORS, PERSONAL_ERRORS, PHONE_ERRORS} from "./FeedBack.constants";
import {Input} from "../Input/Input";
import {useMathMedia} from "../../hooks/useMathMedia";
import {TextArea} from "../TextArea/TextArea";

export const FeedBack: FC<FeedBackProps> = () => {
    const name = useInput('', NAME_ERRORS);
    const phone = useInput('', PHONE_ERRORS);
    const mail = useInput('', MAIL_ERRORS);
    const message = useInput('', MESSAGE_ERRORS);
    const personal = useInput(false, PERSONAL_ERRORS);
    const [ref, fixTextarea] = useFixTextArea();
    const {isMobile, isTablet} = useMathMedia();

    useEffect(() => {
        fixTextarea();
    }, [message]);

    const submit = () => {
        const arr = [name, phone, mail, message, personal];
        if (!name.isValid() || !phone.isValid() || !mail.isValid() || !message.isValid() || !personal.isValid()) {
            arr.forEach(item => item.checkError());
            return;
        }
        const result = {
            id: 0,
            name: name.value,
            phone: phone.value,
            mail: mail.value,
            message: message.value
        };
        arr.forEach(item => item.clear());
        console.log(result);
    };

    return (
        <div className={styles.feedbackBlock}>
            <Htag tag='h2'
                  className={styles.header}>{(isTablet || isMobile) ? 'Хотите сайт без головной боли?' : 'Хотите качественный сайт без головной боли?'}</Htag>
            <P size="l" className={styles.text}>Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта.</P>
            <div className={styles.feedback}>
                <Input inputHandler={name.inputHandler} value={name.value} className={styles.name}
                       placeholder="Ваше имя" classNameError={styles.nameError} error={name.error}
                       checkError={name.checkError} type={"text"} name={"name"}/>
                <Input inputHandler={phone.inputHandler} value={phone.value} className={styles.phone}
                       placeholder="Телефон" classNameError={styles.phoneError} error={phone.error}
                       checkError={phone.checkError} type={"tel"} name={"phone"}/>
                <Input inputHandler={mail.inputHandler} value={mail.value} className={styles.mail}
                       placeholder="Куда вам написать (почта, телеграмм)" classNameError={styles.mailError}
                       error={mail.error} checkError={mail.checkError} type={"email"} name={"email"}/>

                <TextArea ref={ref} error={message.error} checkError={message.checkError} name={"message"}
                          className={styles.message} classNameError={styles.messageError} value={message.value}
                          placeholder={"Сообщение"} inputHandler={message.inputHandler}/>
            </div>
            <div className={styles.personal}>
                <input checked={personal.value as boolean} onChange={personal.inputHandler} className={styles.checkbox}
                       type="checkbox"
                       id='check'/>
                <label className={styles.label} htmlFor="check">Я согласен с условиями обработки</label> <a
                className={styles.link} href="#">персональных
                данных</a>
                {personal.error &&
                    <div className={styles.personalError}>Необходимо ваше согласие</div>}
            </div>
            <Button onClick={submit} className={styles.button} appearance={"primary"}
                    volume={"standard"}>Отправить</Button>
            <img className={styles.logo} src={FeedbackLogo} alt=""/>
        </div>
    );
};
