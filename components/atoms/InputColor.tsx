import React, { InputHTMLAttributes } from 'react';

type InputColorType = InputHTMLAttributes<HTMLInputElement> & {
    onColorChange: (color: string) => void;
};

export default function InputColor({ onColorChange, ...props }: InputColorType) {
    return <input {...props} type="color" onChange={(e) => onColorChange(e.target.value)} />;
}
