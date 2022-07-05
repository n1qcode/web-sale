import React, {FC} from "react";
import {InputAndTextareaProps} from "./Input.props";

export const Input: FC<InputAndTextareaProps> = ({inputHandler, error, checkError, value, placeholder, className, classNameError, type, name}) => {
    return (
        <>
            <input name={name} onChange={inputHandler} value={value as string} onBlur={checkError} className={className}
                   placeholder={placeholder} type={type}/>
            {error && <div className={classNameError}>{error}</div>}
        </>
    );
};
