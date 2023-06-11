import React from 'react';

type ControlButtonType = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ControlButton({ onClick, text }: ControlButtonType) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
        >
            {text}
        </button>
    );
}
