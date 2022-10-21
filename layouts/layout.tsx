import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
    return (
        <main className="flex justify-center items-center min-h-screen py-10 bg-[#191919] text-white">{children}</main>
    );
}
