import React from 'react';

import Image from 'next/image';

import Heading from 'components/atoms/Heading';
import UploadButton from 'components/molecules/UploadButton';

type StickerPropsType = {
    imageList: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onIndexChange: (index: number) => void;
};

export default function Sticker({ imageList, onChange, onIndexChange }: StickerPropsType) {
    return (
        <section className="relative max-h-[350px] overflow-y-auto">
            <div className="sticky top-0 z-50 mb-5 bg-[#191919]">
                <Heading component="h2" text="Stickers" />
                <UploadButton text="Upload" onChange={onChange} />
            </div>
            <div className="flex gap-5 flex-wrap p-5">
                {imageList.map((image, index) => (
                    <Image
                        key={index}
                        src={image}
                        alt="small animal"
                        width={100}
                        height={150}
                        onClick={() => onIndexChange(index)}
                    />
                ))}
            </div>
        </section>
    );
}
