import styles from './Button.module.css';
import {ButtonProps} from './Button.props';
import ArrowRight from "./arrowRight.png";
import ArrowLeft from "./arrowLeft.png";
import cn from 'classnames';

export const Button = ({ arrow, volume, border, appearance, children, className, ...props }: ButtonProps) => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == 'primary',
            [styles.ghost]: appearance == 'ghost',
            [styles.standard]: volume == 'standard',
            [styles.longer]: volume == 'longer',
            [styles.long]: volume == 'long',
            [styles.border]: border == true,
            [styles.arrow]: arrow == 'text'
        })}
                {...props}
        >
            {children}
            {arrow == 'right' && <img src={ArrowRight} alt={''}/>}
            {arrow == 'left' && <img src={ArrowLeft} alt={''}/>}
        </button>
    );
};
