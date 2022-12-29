import React from 'react';

import { IStroke } from 'components/Stroke/types';

export default function Stroke({ handleLineWidth }: IStroke) {
    return (
        <div className="mt-2.5">
            <input
                type="range"
                name="range"
                min="0.1"
                max="5.0"
                defaultValue="2.5"
                step="0.1"
                onChange={handleLineWidth}
            />
        </div>
    );
}
