import React from 'react';

import ControlButton from 'components/molecules/ControlButton';

type ControlsPropsType = {
    mode: string;
    onBackgroundChange: () => void;
    onErase: () => void;
    onReset: () => void;
    onSave: () => void;
};

export default function Controls({ mode, onBackgroundChange, onSave, onErase, onReset }: ControlsPropsType) {
    return (
        <div className="my-5 flex items-center gap-2.5">
            <ControlButton text={mode === 'background' ? 'Paint' : 'Fill'} onClick={onBackgroundChange} />
            <ControlButton text="Save" onClick={onSave} />
            <ControlButton text="Erase" onClick={onErase} />
            <ControlButton text="Reset" onClick={onReset} />
        </div>
    );
}
