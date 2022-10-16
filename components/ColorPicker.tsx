import React from 'react';

interface IProps {
    handleColor: (color: string) => void;
}

const COLORS = [
    { name: 'black', color: '#2c2c2c' },
    { name: 'white', color: '#ffffff' },
    { name: 'red', color: '#ff3b30' },
    { name: 'orange', color: '#ff9500' },
    { name: 'yellow', color: '#ffcc00' },
    { name: 'green', color: '#4cd963' },
    { name: 'blue', color: '#5ac8fa' },
    { name: 'purple', color: '#5856d6' }
];

export default function ColorPicker({ handleColor }: IProps) {
    return (
        <div className="flex items-center justify-center gap-2.5">
            {COLORS.map(({ name, color }) => (
                <button
                    key={name}
                    style={{ backgroundColor: color }}
                    aria-label={`${name} color`}
                    title={`${name} color`}
                    type="button"
                    onClick={() => handleColor(color)}
                    className="w-[30px] h-[30px] rounded-full border border-black"
                />
            ))}
            <input name="color" value="#ff00f7" type="color" onChange={(e) => handleColor(e.target.value)} />
        </div>
    );
}
