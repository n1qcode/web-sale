import {MenuBurgerProps} from "./MenuBurger.props";
import styles from './MenuBurger.module.css';
import {FC, useState} from "react";
import { ReactComponent as MenuBurgerIcon } from "./menuIcon.svg";
import cn from "classnames";

export const MenuBurger: FC<MenuBurgerProps> = ({ className}) => {
    const [isOpen, setOpen] = useState(false);

            return (
                <div className={`${styles.navIcon} ${className}`} >
                    <MenuBurgerIcon className={styles.backIcon} />
                    <div className={cn(styles.burger, {
                            [styles.open]: isOpen
                        })} onClick={() => setOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            );
};



