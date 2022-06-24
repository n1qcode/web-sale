import {FeedBackProps} from "./FeedBack.props";
import styles from './FeedBack.module.css';
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
// import {useMathMedia} from "../../hooks/useMathMedia";
import React, {FC, useEffect, useRef, useState} from "react";
import {Button} from "../Button/Button";
import FeedbackLogo from './feedback.png';


export const FeedBack: FC<FeedBackProps> = () => {
    // const {isMobile, isTablet, isDesktop} = useMathMedia();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [mailDirty, setMailDirty] = useState(false);
    const [messageDirty, setMessageDirty] = useState(false);
    const [nameError, setNameError] = useState('Как можно к вам обращаться?');
    const [phoneError, setPhoneError] = useState('Не забудьте указать номер');
    const [mailError, setMailError] = useState('Оставьте пожалуйста контакты для обратной связи');
    const [messageError, setMessageError] = useState('Оставьте пожалуйста ваши пожелания');
    const [formValid, setFormValid] = useState(false);
    const [formData, setFormData] = useState({});
    const counterRef = useRef(formData);

    useEffect(() => {
       if (nameError || phoneError || mailError || messageError) {
           setFormValid(false);
       } else {
           setFormValid(true);
       }
    }, [nameError, phoneError, mailError, messageError]);

    useEffect(() => {
        setFormData({
            "id": counterRef.current,
            "name": name,
            "phone": phone,
            "contacts": mail,
            "message": message
        });
    }, [name, phone, mail, message]);

    let idCounter = makeCounter();

    function makeCounter() {
        let value = 0;
        return function() {
            return value = value + 1;
        };
    }

    useEffect(() => {
        counterRef.current = idCounter();
    }, [idCounter]);

    const nameHandler = (e) => {
        setName(e.target.value);
        const re = /^[a-z ,.'-]+$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            e.target.value.replace(/^[a-z ,.'-]+$/i);
            setNameError('Некорректное имя');
        } else {
            setNameError('');
        }
    };

    const phoneHandler = (e) => {
        setPhone(e.target.value);
        const re = /^\+?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Некорректный номер');
        } else {
            setPhoneError('');
        }
    };

    const mailHandler = (e) => {
        setMail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMailError('Некорректные контактные данные');
        } else {
            setMailError('');
        }
    };

    const messageHandler = (e) => {
        setMessage(e.target.value);
        const re = /^[a-z ,.'-]+$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setMessageError('В сообщении присутствуют недопустимые символы');
        } else {
            setMessageError('');
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

    return (
        <div className={styles.feedbackBlock}>
            <Htag tag='h2' className={styles.header}>Хотите качественный сайт без головной боли?</Htag>
            <P size="l" className={styles.text}>Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта.</P>
            <div className={styles.feedback}>
                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} name={"name"}
                       type={"name"} className={styles.name}
                       placeholder="Ваше имя"/>
                {(nameDirty && nameError) && <div className={styles.nameError}>{nameError}</div>}
                <input onChange={e => phoneHandler(e)} value={phone} onBlur={e => blurHandler(e)} name={"phone"}
                       type={"tel"} className={styles.phone}
                       placeholder="Телефон"/>
                {(phoneDirty && phoneError) && <div className={styles.phoneError}>{phoneError}</div>}
                <input onChange={e => mailHandler(e)} value={mail} onBlur={e => blurHandler(e)} name={"email"}
                       type={"email"} className={styles.mail}
                       placeholder="Куда вам написать (почта, телеграмм)"/>
                {(mailDirty && mailError) && <div className={styles.mailError}>{mailError}</div>}
                <textarea onChange={e => messageHandler(e)} value={message} onBlur={e => blurHandler(e)} name={"message"}
                          className={styles.message} placeholder="Сообщение"></textarea>
                {(messageDirty && messageError) && <div className={styles.messageError}>{messageError}</div>}
            </div>
            <div className={styles.personal}>
                <input className={styles.checkbox} type="checkbox" id='check'/>
                <label htmlFor="check">Я согласен с условиями обработки</label> <a className={styles.link} href="#">персональных
                данных</a>
            </div>
            <Button disabled={!formValid} onClick={() => console.log(JSON.stringify(formData))} className={styles.button} appearance={"primary"} volume={"standard"}>Отправить</Button>
            <img className={styles.logo} src={FeedbackLogo} alt=""/>
        </div>
    );
};
