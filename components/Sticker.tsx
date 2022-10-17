import React from 'react';

import Image from 'next/image';

import { IMAGE_LIST } from 'utils';

interface IProps {
    handleIndex: (index: number) => void;
}

export default function Sticker({ handleIndex }: IProps) {
    return (
        <section className="relative max-h-[350px] overflow-y-auto">
            <h2 className="text-xl mb-5 text-center font-bold font-mono sticky top-0 bg-white z-50">Stickers</h2>
            <div className="flex gap-5 justify-between flex-wrap px-5">
                {IMAGE_LIST.map((image, index) => (
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
