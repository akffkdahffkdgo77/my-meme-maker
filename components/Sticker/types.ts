export interface ISticker {
    imageList: string[];
    setImageList: React.Dispatch<React.SetStateAction<string[]>>;
    handleIndex: (index: number) => void;
}
