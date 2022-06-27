import React, {FC} from "react";
import {InputProps} from "./Input.props";

export const Input: FC<InputProps> = ({inputHandler, error, checkError, value, placeholder, className, classNameError}) => {
    return (
        <>
            <input onChange={inputHandler} value={value as string} onBlur={checkError} className={className}
                   placeholder={placeholder}/>
            {error && <div className={classNameError}>{error}</div>}
        </>
    );
};


