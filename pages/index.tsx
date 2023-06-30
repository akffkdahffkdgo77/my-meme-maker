import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';

import { Canvas, Heading } from '@atoms';
import Stroke from '@molecules/Stroke';
import { ColorPicker, Controls, Sticker } from '@organisms';

export default function Home() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const selectedRef = useRef<number>(-1);
    const lineWidthRef = useRef(2.5);
    const backgroundRef = useRef('');

    const [color, setColor] = useState('');
    const [mode, setMode] = useState('pattern');
    const [erase, setErase] = useState(false);
    const [imageList, setImageList] = useState<string[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d')!;
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, 500, 500);
    }, []);

    const handleIndex = (index: number) => {
        selectedRef.current = index;
    };

    const handleColor = (newColor: string) => {
        if (erase) {
            return;
        }

        if (mode === 'background') {
            const canvas = canvasRef.current;
            const context = canvas!.getContext('2d')!;
            backgroundRef.current = newColor;
            context.fillStyle = newColor;
            context.fillRect(0, 0, 500, 500);
        } else {
            setColor(newColor);
        }
    };

    const handleBackground = () => {
        if (mode === 'background') {
            setColor('#2c2c2c');
        }
        setMode((prev) => (prev === 'background' ? '' : 'background'));
    };

    const handleSave = () => {
        const image = canvasRef.current!.toDataURL();
        const link = document.createElement('a');
        link.href = image;
        link.download = `Sticker[🎨]-${new Date().getTime()}.png`;
        link.click();
    };

    const handleLineWidth = (e: ChangeEvent<HTMLInputElement>) => {
        lineWidthRef.current = erase ? Number(e.target.value) * 10 : Number(e.target.value);
    };

    const handleErase = () => {
        if (erase) {
            setErase(false);
            setColor('#2c2c2c');
        } else {
            setErase(true);
            setColor(backgroundRef.current);
            lineWidthRef.current = 25;
        }
    };

    const handleReset = () => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d')!;
        context.clearRect(0, 0, 500, 500);
    };

    const handleMouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d')!;
        context.strokeStyle = color;
        context.lineWidth = lineWidthRef.current;

        const xCoord = e.nativeEvent.offsetX;
        const yCoord = e.nativeEvent.offsetY;

        if (!mode) {
            context.beginPath();
            context.moveTo(xCoord, yCoord);
        } else if (mode === 'draw') {
            context.lineTo(xCoord, yCoord);
            context.stroke();
        }
    };

    const handleClick = (e: MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const context = canvas!.getContext('2d')!;
        if (selectedRef.current !== -1) {
            const image = new Image();
            image.src = imageList[selectedRef.current];
            image.onload = function onLoad() {
                const width = 200;
                const height = 300;
                context!.drawImage(image, e.nativeEvent.offsetX - 100, e.nativeEvent.offsetY - 150, width, height);
                selectedRef.current = -1;
            };
        }
    };

    const handleImageUpload = (e: React.FormEvent<HTMLInputElement>) => {
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
        <section className="grid grid-cols-[1fr_400px] gap-x-5">
            <Heading component="h1" text="My Sticker" />
            <div className="flex items-center justify-center">
                <Canvas
                    width={500}
                    height={500}
                    ref={canvasRef}
                    onClick={handleClick}
                    onMouseUp={() => setMode((prev) => (prev === 'background' ? prev : ''))}
                    onMouseMove={handleMouseMove}
                    onMouseDown={() => setMode((prev) => (prev === 'background' ? prev : 'draw'))}
                    onMouseLeave={() => setMode((prev) => (prev === 'background' ? prev : ''))}
                    className="rounded-md border border-white bg-white"
                />
            </div>
            <div className="col-start-2 w-full justify-self-center rounded-md border border-white pb-2.5 pt-5">
                <section className="mb-10 flex flex-col items-center justify-center">
                    <Heading component="h2" text="Controls" />
                    <Stroke onLineWidthChange={handleLineWidth} />
                    <Controls
                        mode={mode}
                        onBackgroundChange={handleBackground}
                        onErase={handleErase}
                        onSave={handleSave}
                        onReset={handleReset}
                    />
                    <ColorPicker selectedColor={color} onColorChange={handleColor} />
                </section>
                <Sticker imageList={imageList} onChange={handleImageUpload} onIndexChange={handleIndex} />
            </div>
        </section>
    );
}
