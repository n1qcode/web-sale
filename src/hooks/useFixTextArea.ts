import React, {useRef} from "react";

export type refType = [
    React.MutableRefObject<HTMLTextAreaElement | null>,
    () => void
];

export default (): refType => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    return [
        textareaRef,
        () => {
            const textarea = textareaRef.current;
            if (!textarea) return;
            if (textarea.clientHeight > 70) return;

            textarea.style.height = '1px';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    ];
};
