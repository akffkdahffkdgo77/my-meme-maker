import React from 'react';

import InputRange from 'components/atoms/InputRange';

type StrokePropsType = {
    onLineWidthChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Stroke({ onLineWidthChange }: StrokePropsType) {
    return (
        <div className="mt-2.5">
            <InputRange
                name="range"
                min="0.1"
                max="5.0"
                defaultValue="2.5"
                step="0.1"
                onChange={onLineWidthChange}
                className="w-[320px]"
            />
        </div>
    );
}
