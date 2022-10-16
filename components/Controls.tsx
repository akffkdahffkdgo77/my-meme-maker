import React from 'react';

interface IProps {
    mode: string;
    handleBackground: () => void;
    handleSave: () => void;
    handleErase: () => void;
    handleReset: () => void;
}

export default function Controls({ mode, handleBackground, handleSave, handleErase, handleReset }: IProps) {
    return (
        <div className="flex items-center gap-2.5 my-5">
            <button type="button" className="px-2.5 py-[5px] border border-black rounded-md" onClick={handleBackground}>
                {mode === 'background' ? 'Paint' : 'Fill'}
            </button>
            <button type="button" className="px-2.5 py-[5px] border border-black rounded-md" onClick={handleSave}>
                Save
            </button>
            <button type="button" className="px-2.5 py-[5px] border border-black rounded-md" onClick={handleErase}>
                Erase
            </button>
            <button type="button" className="px-2.5 py-[5px] border border-black rounded-md" onClick={handleReset}>
                Reset
            </button>
        </div>
    );
}
