import {FeedBackProps} from "./FeedBack.props";
import styles from './FeedBack.module.css';
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
// import {useMathMedia} from "../../hooks/useMathMedia";
import React, {FC, useEffect, useRef, useState} from "react";
import {Button} from "../Button/Button";
import FeedbackLogo from './feedback.png';

const NAME_REGEXP = /^[a-zа-я]+$/i;
const PHONE_REGEXP = /(^\+?[0-9]{3}[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$)|(^\+?[(][0-9]{3}[)][-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$)/im;
const MAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const FeedBack: FC<FeedBackProps> = () => {
    // const {isMobile, isTablet, isDesktop} = useMathMedia();
    const [name, setName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Как можно к вам обращаться?');
    const [nameSubmitError, setNameSubmitError] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [phoneError, setPhoneError] = useState('Не забудьте указать номер');
    const [phoneSubmitError, setPhoneSubmitError] = useState(false);
    const [mail, setMail] = useState('');
    const [mailDirty, setMailDirty] = useState(false);
    const [mailError, setMailError] = useState('Оставьте пожалуйста контакты для обратной связи');
    const [mailSubmitError, setMailSubmitError] = useState(false);
    const [message, setMessage] = useState('');
    const [messageDirty, setMessageDirty] = useState(false);
    const [messageError, setMessageError] = useState('Напишите пожалуйста ваши пожелания');
    const [messageSubmitError, setMessageSubmitError] = useState(false);
    const [personalCheck, setPersonalCheck] = useState(false);
    const [personalError, setPersonalError] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({});
    const [counterId, setCounterId] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (nameError || phoneError || mailError || messageError || personalError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError, mailError, messageError, personalError]);

    useEffect(() => {
        console.log(JSON.stringify(formData));
    }, [formData]);

    useEffect(() => {
        fixTextarea();
    }, [message]);

    const nameHandler = (e) => {
        setName(e.target.value);
        if (!NAME_REGEXP.test(String(e.target.value).toLowerCase())) {
            if (e.target.value.length > 0) {
                setNameError('Некорректное имя');
            } else {
                setNameError('Как можно к вам обращаться?');
            }
        } else {
            setNameError('');
        }
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        if (!PHONE_REGEXP.test(String(e.target.value).toLowerCase())) {
            if (e.target.value.length > 0) {
                setPhoneError('Некорректный номер');
            } else {
                setPhoneError('Не забудьте указать номер');
            }
        } else {
            setPhoneError('');
        }
    };

    const mailHandler = (e) => {
        setMail(e.target.value);
        if (!MAIL_REGEXP.test(String(e.target.value).toLowerCase())) {
            if (e.target.value.length > 0) {
                setMailError('Некорректные контактные данные');
            } else {
                setMailError('Оставьте пожалуйста контакты для обратной связи');
            }
        } else {
            setMailError('');
        }
    };

    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (!NAME_REGEXP.test(String(e.target.value).toLowerCase())) {
            if (e.target.value.length > 0) {
                setMessageError('В сообщении присутствуют недопустимые символы');
            } else {
                setMessageError('Напишите пожалуйста ваши пожелания');
            }
        } else {
            setMessageError('');
        }
    };

    const personalHandler = () => {
        setPersonalCheck(!personalCheck);
        if (!personalCheck) {
            setPersonalError(false);
        } else {
            setPersonalError(true);
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
            case 'email':
                setMailDirty(true);
                break;

            case 'message':
                setMessageDirty(true);
                break;
        }
    };

    const submit = () => {
        if (formValid) {
            setCounterId(counterId + 1);
            setFormData({
                id: counterId,
                name,
                phone,
                mail,
                message
            });
            // отправляем на сервер и проверяем статус, если все ок, то выполняем:
            setName('');
            setPhone('');
            setMail('');
            setMessage('');
            setPersonalError(false);
            setPersonalCheck(false);
        } else {
            if (!nameDirty || nameError) setNameSubmitError(true);
            if (!phoneDirty || phoneError) setPhoneSubmitError(true);
            if (!mailDirty || mailError) setMailSubmitError(true);
            if (!messageDirty || messageError) setMessageSubmitError(true);
            if (!personalCheck) setPersonalError(true);
        }
    };

    function fixTextarea() {
        const textarea = textareaRef.current;
        if (!textarea) return;
        if (textarea.clientHeight > 70) return;

        textarea.style.height = '1px';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return (
        <div className={styles.feedbackBlock}>
            <Htag tag='h2' className={styles.header}>Хотите качественный сайт без головной боли?</Htag>
            <P size="l" className={styles.text}>Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта.</P>
            <div className={styles.feedback}>
                <input onChange={nameHandler} value={name} onBlur={blurHandler} name={"name"}
                       type={"name"} className={styles.name}
                       placeholder="Ваше имя"/>
                {(nameSubmitError || (nameDirty && nameError)) && <div className={styles.nameError}>{nameError}</div>}
                <input onChange={phoneHandler} value={phone} onBlur={blurHandler} name={"phone"}
                       type={"tel"} className={styles.phone}
                       placeholder="Телефон"/>
                {(phoneSubmitError || (phoneDirty && phoneError)) &&
                    <div className={styles.phoneError}>{phoneError}</div>}
                <input onChange={mailHandler} value={mail} onBlur={blurHandler} name={"email"}
                       type={"email"} className={styles.mail}
                       placeholder="Куда вам написать (почта, телеграмм)"/>
                {(mailSubmitError || (mailDirty && mailError)) && <div className={styles.mailError}>{mailError}</div>}
                <textarea ref={textareaRef} onChange={messageHandler} value={message} onBlur={blurHandler}
                          name={"message"}
                          className={styles.message} placeholder="Сообщение"></textarea>
                {(messageSubmitError || (messageDirty && messageError)) &&
                    <div className={styles.messageError}>{messageError}</div>}
            </div>
            <div className={styles.personal}>
                <input checked={personalCheck} onChange={personalHandler} className={styles.checkbox} type="checkbox"
                       id='check'/>
                <label htmlFor="check">Я согласен с условиями обработки</label> <a className={styles.link} href="#">персональных
                данных</a>
            </div>
            {personalError &&
                <div className={styles.personalError}>Необходимо ваше согласие</div>}
            <Button onClick={submit} className={styles.button} appearance={"primary"}
                    volume={"standard"}>Отправить</Button>
            <img className={styles.logo} src={FeedbackLogo} alt=""/>
        </div>
    );
};
