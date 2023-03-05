import React from 'react';

import { COLORS } from 'constants/data';

import type { ColorPickerPropsType } from 'components/ColorPicker/types';

export default function ColorPicker({ selectedColor, onColorChange }: ColorPickerPropsType) {
    return (
        <div className="flex items-center justify-center gap-2.5">
            {COLORS.map(({ name, color }) => (
                <button
                    key={name}
                    style={{ backgroundColor: color }}
                    aria-label={`${name} color`}
                    title={`${name} color`}
                    type="button"
                    onClick={() => onColorChange(color)}
                    className={`${
                        selectedColor === color ? 'animate-pulse' : ''
                    } w-[30px] h-[30px] rounded-full border border-white`}
                />
            ))}
            <input name="color" value="#ff00f7" type="color" onChange={(e) => onColorChange(e.target.value)} />
        </div>
    );
}
