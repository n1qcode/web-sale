import {DescriptionComponentProps} from "./DescriptionComponent.props";
import styles from './DescriptionComponent.module.css';
import cn from 'classnames';
import React, {FC} from "react";
import {Htag} from "../Htag/Htag";
import {P} from "../P/P";
import Pic from './pic.png';

export const DescriptionComponent: FC<DescriptionComponentProps> = ({className}) => {
    return (
        <div className={cn(className, styles.description)}>
            <img className={styles.pic} src={Pic} alt=""/>
            <div className={styles.first}>
                <Htag className={styles.title} tag='h3'>Официальность</Htag>
                <P className={styles.text} size="m">Все члены команды офромлены как самозанятые</P>
            </div>
            <div className={styles.second}>
                <Htag className={styles.title} tag='h3'>1 проект</Htag>
                <P className={styles.text} size="m">Мы не берем другие заказы, пока не закончим возложенные на нас
                    обязательства</P>
            </div>
            <div className={styles.third}>
                <Htag className={styles.title} tag='h3'>Доступность</Htag>
                <P className={styles.text} size="m">У нас нет расходов по аренде офиса и зарплаты сотрудникам, а
                    качество работ и отзывы говорят сами за себя</P>
            </div>
        </div>
    );
};
