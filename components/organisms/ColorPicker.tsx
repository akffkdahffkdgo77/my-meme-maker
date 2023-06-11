import React from 'react';

import InputColor from 'components/atoms/InputColor';
import ColorButton from 'components/molecules/ColorButton';
import { COLORS } from 'constants/data';

type ColorPickerPropsType = {
    selectedColor: string;
    onColorChange: (color: string) => void;
};

export default function ColorPicker({ selectedColor, onColorChange }: ColorPickerPropsType) {
    return (
        <div className="flex items-center justify-center gap-2.5">
            {COLORS.map(({ name, color }) => (
                <ColorButton
                    key={name}
                    name={name}
                    color={color}
                    selectedColor={selectedColor}
                    onColorChange={onColorChange}
                />
            ))}
            <InputColor name="color" value="#ff00f7" onColorChange={onColorChange} />
        </div>
    );
}
