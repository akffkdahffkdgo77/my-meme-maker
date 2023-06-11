import React, { InputHTMLAttributes } from 'react';

type InputRangeType = InputHTMLAttributes<HTMLInputElement> & {
    min: string;
    max: string;
    defaultValue: string;
    step: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputRange(props: InputRangeType) {
    return <input type="range" {...props} />;
}
