import React, { FormEvent } from 'react';

import Image from 'next/image';

import { ISticker } from 'components/Sticker/types';

export default function Sticker({ imageList, setImageList, handleIndex }: ISticker) {
    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const file = e.currentTarget.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function onLoad() {
                setImageList((prev) => [...prev, URL.createObjectURL(file)]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className="relative max-h-[350px] overflow-y-auto">
            <div className="sticky top-0 z-50 mb-5 bg-[#191919]">
                <h2 className="text-xl text-center font-bold font-mono flex-1">Stickers</h2>
                <label
                    htmlFor="upload"
                    className="absolute right-2.5 top-0 cursor-pointer px-[5px] border border-white rounded-md font-mono text-[12px]"
                >
                    Upload
                    <input
                        className="invisible w-0 h-0"
                        id="upload"
                        type="file"
                        accept="image/*"
                        onChange={onChange}
                        onClick={(e) => {
                            e.currentTarget.value = '';
                        }}
                    />
                </label>
            </div>
            <div className="flex gap-5 flex-wrap p-5">
                {imageList.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="small animal"
                        width={100}
                        height={150}
                        onClick={() => handleIndex(index)}
                    />
                ))}
            </div>
        </section>
    );
}
