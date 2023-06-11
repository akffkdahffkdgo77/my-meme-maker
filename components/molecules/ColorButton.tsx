import React from 'react';

type ColorButtonType = {
    name: string;
    color: string;
    selectedColor: string;
    onColorChange: (color: string) => void;
};

export default function ColorButton({ name, color, onColorChange, selectedColor }: ColorButtonType) {
    return (
        <button
            type="button"
            title={`${name} color`}
            aria-label={`${name} color`}
            onClick={() => onColorChange(color)}
            className={`${
                selectedColor === color ? 'animate-pulse' : ''
            } w-[30px] h-[30px] rounded-full border border-white`}
            style={{ backgroundColor: color }}
        />
    );
}
