import React from 'react';

type BaseLayoutPropsType = {
    children: React.ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutPropsType) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#191919] py-10 text-white">{children}</main>
    );
}
