import {TextAreaProps} from "./TextArea.props";
import React, {FC} from "react";

export const TextArea: FC<TextAreaProps> = ({inputHandler, checkError, value, name, error, placeholder, className, classNameError, ref}) => {

    return (
        <>
            <textarea ref={ref} className={className} placeholder={placeholder} onChange={inputHandler}
                      value={value as string} onBlur={checkError} name={name}/>
            {error && <div className={classNameError}>{error}</div>}
        </>
    );
};
