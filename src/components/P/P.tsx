import {PProps} from "./P.props";
import styles from './P.module.css';
import cn from 'classnames';
import {FC} from "react";

export const P: FC<PProps> = ({ size = "m", children, className}) => {
            return (
                <p className={ `${cn(styles.p, className, {
                    [styles.s]: size == 's',
                    [styles.m]: size == 'm',
                    [styles.l]: size == 'l'
                })} ${className}`}
                >
                    {children}
                </p>
            );
};


