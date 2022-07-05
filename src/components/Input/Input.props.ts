import {inputAndTextareaTypes} from "../../hooks/useInput";

export type InputAndTextareaProps = Omit<inputAndTextareaTypes, 'clear' | 'isValid'> & {
    placeholder: string,
    className: string,
    classNameError: string,
    type: string,
    name: string
};
