import {FooterProps} from "./Footer.props";
import styles from "./Footer.module.css";
import cn from 'classnames';
import logoFooterPrime from "./logoFooterPrim.png";
import {Button, P} from "../../components";
import React from "react";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
            return (
                <footer className={cn(className, styles.footer)} {...props}>
                    <div className={styles.logo}>
                        <img src={logoFooterPrime} alt=""/>
                    </div>
                    <div className={styles.buttons}>
                    <Button appearance={"ghost"}>О нас</Button>
                    <Button appearance={"ghost"}>Услуги</Button>
                    <Button appearance={"ghost"}>Проекты</Button>
                    <Button appearance={"ghost"}>Контакты</Button>
                    <Button className={styles.lastButton} appearance={"ghost"} border={true}>Задать вопрос</Button>
                    </div>
                    <div className={styles.text}>
                        <P>Мы фрилансеры и работаем полностью удаленно. Где бы вы ни находились, мы можем работать вместе.</P>
                    </div>
                </footer>
            );
};
