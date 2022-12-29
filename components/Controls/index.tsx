import React from 'react';

import { IControls } from 'components/Controls/types';

export default function Controls({ mode, handleBackground, handleSave, handleErase, handleReset }: IControls) {
    return (
        <div className="flex items-center gap-2.5 my-5">
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={handleBackground}
            >
                {mode === 'background' ? 'Paint' : 'Fill'}
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={handleSave}
            >
                Save
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={handleErase}
            >
                Erase
            </button>
            <button
                type="button"
                className="px-2.5 py-[5px] border border-white uppercase font-bold rounded-md"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
}
