import {HeaderProps} from "./Header.props";
import styles from "./Header.module.css";
import cn from 'classnames';
import FooterLogo from "../Footer/logo-footer.svg";
import FooterLogoText from "../Footer/text-footer.svg";
import {Button, MenuBurger, P} from "../../components";
import React, {FC} from "react";

export const Header: FC<HeaderProps> = ({className}) => {
    return (
        <header className={cn(className, styles.header)}>
            <div className={styles.logo}>
                <img className={styles.logoIcon} src={FooterLogo} alt={''}/>
                <img className={styles.logoText} src={FooterLogoText} alt={''}/>
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
