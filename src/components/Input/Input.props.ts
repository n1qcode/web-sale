import {inputTypes} from "../../hooks/useInput";

export type InputProps = Omit<inputTypes, 'clear' | 'isValid'> & {placeholder: string, className: string, classNameError: string};
