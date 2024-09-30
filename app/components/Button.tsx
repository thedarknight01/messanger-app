'use client'

import clsx from "clsx";
import { MouseEventHandler } from "react"; // Add this line
interface ButtonProps{
    types?:'button' | 'submit' | 'reset'|undefined;
    fullwidth?:boolean;
    children:React.ReactNode;
    onClick?:MouseEventHandler<HTMLButtonElement> | undefined;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
}
const Button:React.FC<ButtonProps>= ({
    types, // Change 'type' to 'types'
    fullwidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {

    return (
        <button onClick={onClick} type={types} disabled={disabled}
        className={clsx(`
            inline-flex
            justify-center
            py-2
            px-4
            border
            border-transparent
            shadow-sm 
            text-sm
            font-medium
            rounded-md
            text-white
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2`,
            fullwidth && 'w-full',
            secondary ? 'text-gray-900':'text-white',
            danger && 'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600',
            disabled && 'opacity-50 cursor-not-allowed',
            !secondary && !danger && 'bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-700'
        )}
        >{children}</button>
    );
}

export default Button;