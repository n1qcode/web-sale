import {ReactNode} from "react";


export interface PProps {
    size?: 's' | 'm' | 'l';
    children: ReactNode;
    className?: string;
}
