import React from 'react';

import type { BaseLayoutPropsType } from 'layouts/BaseLayout/types';

export default function BaseLayout({ children }: BaseLayoutPropsType) {
    return (
        <main className="flex justify-center items-center min-h-screen py-10 bg-[#191919] text-white">{children}</main>
    );
}
