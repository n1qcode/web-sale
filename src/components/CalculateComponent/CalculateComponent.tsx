import {CalculateComponentProps} from "./CalculateComponent.props";
import styles from './CalculateComponent.module.css';
import cn from 'classnames';
import React, {FC} from "react";
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
import {Button} from "../Button/Button";
import Label from './label.png';
import Logo from './logo.png';
import MobileLogo from './mobileLogo.png';

export const CalculateComponent: FC<CalculateComponentProps> = ({className}) => {
    return (
        <div className={cn(className, styles.calculate)}>
            <Htag className={styles.title} tag='h1'>Разработка и создание сайтов</Htag>
            <P className={styles.text} size="l">Разработаем дизайн, наполним сайт продающим контентом, возьмем все
                головные боли разработки
                сайта на себя. <br/> <br/> Запишись сейчас и получи скидку 15 % </P>
            <div className={styles.buttonBlock}>
                <Button className={styles.button} appearance={"primary"} volume={"standard"}>Рассчитать стоймость
                    проекта </Button>
                <img className={styles.label} src={Label} alt=""/>
            </div>
            <div className={styles.bigIcon}>
                <img className={styles.logo} src={Logo} alt=""/>
                <img className={styles.mobileLogo} src={MobileLogo} alt=""/>
            </div>
        </div>
    );
};
