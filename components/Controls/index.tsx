import React from 'react';

import type { ControlsPropsType } from 'components/Controls/types';

export default function Controls({ mode, onBackgroundChange, onSave, onErase, onReset }: ControlsPropsType) {
    return (
        <div className="flex items-center gap-2.5 my-5">
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={onBackgroundChange}
            >
                {mode === 'background' ? 'Paint' : 'Fill'}
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={onSave}
            >
                Save
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={onErase}
            >
                Erase
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={onReset}
            >
                Reset
            </button>
        </div>
    );
}
