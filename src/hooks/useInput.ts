import React, {useEffect, useRef, useState} from "react";

export interface inputTypes {
    clear: () => void,
    error: string,
    inputHandler: (e: React.ChangeEvent<input>) => void,
    checkError: () => void,
    value: string | boolean,
    isValid: () => boolean,
}

type input = HTMLInputElement | HTMLTextAreaElement;

type arrayType<T> = [string, (value: T)=>boolean][];

export default (initialValue: string | boolean, array: arrayType<string | boolean>): inputTypes => {
    const [inputValue, setInputValue] = useState<string | boolean>(initialValue);
    const [error, setError] = useState<string>('');
    const isMount = useRef(true);

    useEffect(() => {
        if (isMount.current) {
            isMount.current = false;
            return;
        }
        checkError();
    }, [inputValue]);

    const inputHandler = (e: React.ChangeEvent<input>) => {
        if (typeof inputValue === "boolean") {
            setInputValue(!inputValue);
            return;
        }
        setInputValue((e.target as input).value);
    };

    const checkError = () => {
        for (const [error, fn] of array) {
            if (fn(inputValue)) {
                setError(error);
                return;
            }
        }
        setError('');
    };

    const isValid = () => !!(inputValue && !error);

    return {
        clear: () => {
            isMount.current = true;
            setInputValue(typeof inputValue === "boolean" ? false : '');
            setError('');
        },
        error,
        inputHandler,
        checkError,
        value: inputValue,
        isValid,
    };
};
