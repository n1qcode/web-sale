import {HeaderProps} from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import logoHeader from "./logoHeader.png";
import logoHeaderPrime from "./logoHeaderPrim.png";
import {Button, MenuBurger, P} from "../../components";
import React, {FC} from "react";
import {useMathMedia} from "../../hooks/useMathMedia";

export const Header: FC<HeaderProps> = ({className}) => {
    const {isMobile, isTablet} = useMathMedia();

    return (
        <header className={cn(className, styles.header)}>
            <div className={styles.logo}>
                <img src={`${(isMobile || isTablet) ? logoHeaderPrime : logoHeader}`} alt=""/>
            </div>
            <div className={styles.buttons}>
                <Button appearance={"ghost"}>О нас</Button>
                <Button appearance={"ghost"}>Услуги</Button>
                <Button appearance={"ghost"}>Проекты</Button>
                <Button appearance={"ghost"}>Контакты</Button>
                <Button className={styles.lastButton} appearance={"primary"}>Задать вопрос</Button>
            </div>
            <div className={styles.mobile}>
                <P className={styles.phone} size="l">8-999-909-99-99</P>
                <P className={styles.menu} size="l">Меню</P>
                <MenuBurger className={styles.burger} />
            </div>
        </header>
    );
};
