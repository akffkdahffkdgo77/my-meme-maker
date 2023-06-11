import React from 'react';

type BaseLayoutPropsType = {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutPropsType) {
    return (
        <main className="flex justify-center items-center min-h-screen py-10 bg-[#191919] text-white">{children}</main>
    );
}
