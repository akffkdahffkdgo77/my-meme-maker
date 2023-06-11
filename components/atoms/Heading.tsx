import React from 'react';

type ComponentType = 'h1' | 'h2';

type HeadingType = {
    component: ComponentType;
    text: string;
};

function getComponent(type: ComponentType, text: string) {
    switch (type) {
        case 'h1':
            return <h1 className="col-span-2 text-4xl font-bold font-mono text-center mb-10">{text}</h1>;
        case 'h2':
            return <h2 className="w-full text-xl mb-5 text-center font-bold font-mono">{text}</h2>;
        default:
            return null;
    }
}

export default function Heading({ component, text }: HeadingType) {
    return getComponent(component, text);
}
