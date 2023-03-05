import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';

import Head from 'next/head';

import { ColorPicker, Controls, Sticker, Stroke } from 'components';

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

    return (
        <>
            <Head>
                <title>My Sticker</title>
            </Head>
            <section className="grid grid-cols-[1fr_400px] gap-x-5">
                <h1 className="col-span-2 text-4xl font-bold font-mono text-center mb-10">My Sticker</h1>
                <div className="flex items-center justify-center">
                    <canvas
                        className="border rounded-md border-white bg-white"
                        width={500}
                        height={500}
                        ref={canvasRef}
                        onClick={handleClick}
                        onMouseUp={() => setMode((prev) => (prev === 'background' ? prev : ''))}
                        onMouseMove={handleMouseMove}
                        onMouseDown={() => setMode((prev) => (prev === 'background' ? prev : 'draw'))}
                        onMouseLeave={() => setMode((prev) => (prev === 'background' ? prev : ''))}
                    />
                </div>
                <div className="w-full justify-self-center col-start-2 border border-white rounded-md pt-5 pb-2.5">
                    <section className="mb-10 flex justify-center flex-col items-center">
                        <h2 className="text-xl mb-5 text-center font-bold font-mono">Controls</h2>
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
                    <Sticker imageList={imageList} setImageList={setImageList} onIndexChange={handleIndex} />
                </div>
            </section>
        </>
    );
}
