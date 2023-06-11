import React from 'react';

type CanvasType = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
    onClick: (e: React.MouseEvent<HTMLCanvasElement>) => void;
    onMouseUp: () => void;
    onMouseMove: (e: React.MouseEvent<HTMLCanvasElement>) => void;
    onMouseDown: () => void;
    onMouseLeave: () => void;
};

const Canvas = React.forwardRef<HTMLCanvasElement, CanvasType>(function createCanvas(
    { onClick, onMouseUp, onMouseMove, onMouseDown, onMouseLeave, ...props },
    ref
) {
    return (
        <canvas
            {...props}
            ref={ref}
            onClick={onClick}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
        />
    );
});

export default Canvas;
