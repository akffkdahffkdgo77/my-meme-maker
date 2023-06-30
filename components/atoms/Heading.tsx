import React from 'react';

type ComponentType = 'h1' | 'h2';

type HeadingType = {
    component: ComponentType;
    text: string;
};

function getComponent(type: ComponentType, text: string) {
    switch (type) {
        case 'h1':
            return <h1 className="col-span-2 mb-10 text-center font-mono text-4xl font-bold">{text}</h1>;
        case 'h2':
            return <h2 className="mb-5 w-full text-center font-mono text-xl font-bold">{text}</h2>;
        default:
            return null;
    }
}

export default function Heading({ component, text }: HeadingType) {
    return getComponent(component, text);
}
