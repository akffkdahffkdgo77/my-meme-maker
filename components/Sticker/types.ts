export type StickerPropsType = {
    imageList: string[];
    setImageList: React.Dispatch<React.SetStateAction<string[]>>;
    onIndexChange: (index: number) => void;
};
