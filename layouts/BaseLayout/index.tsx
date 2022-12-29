import React from 'react';

import { IBaseLayout } from 'layouts/BaseLayout/types';

export default function BaseLayout({ children }: IBaseLayout) {
    return (
        <main className="flex justify-center items-center min-h-screen py-10 bg-[#191919] text-white">{children}</main>
    );
}
