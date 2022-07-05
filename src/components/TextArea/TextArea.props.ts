import {inputAndTextareaTypes} from "../../hooks/useInput";
import {InputAndTextareaProps} from "../Input/Input.props";
import React from "react";

export type TextAreaProps = Omit<InputAndTextareaProps, 'type'> & Omit<inputAndTextareaTypes, 'clear' | 'isValid'> & {
    ref: React.MutableRefObject<HTMLTextAreaElement | null>;
};
