import React from 'react';

type UploadButtonType = {
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadButton({ text, onChange }: UploadButtonType) {
    return (
        <label
            htmlFor="upload"
            className="absolute right-2.5 top-0 cursor-pointer rounded-md border border-white px-[5px] font-mono text-[12px]"
        >
            {text}
            <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={onChange}
                onClick={(e) => {
                    e.currentTarget.value = '';
                }}
                className="invisible h-0 w-0"
            />
        </label>
    );
}
