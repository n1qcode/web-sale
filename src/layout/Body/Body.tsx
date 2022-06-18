import {BodyProps} from "./Body.props";
import styles from "./Body.module.css";
import cn from 'classnames';
import React from "react";

export const Body = ({ className, ...props }: BodyProps): JSX.Element => {
    return (
        <div className={cn(className, styles.body)} {...props}>

        </div>
    );
};


