import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <>
            <main className="max-w-6xl mx-auto min-h-screen py-10">{children}</main>
        </>
    );
}
