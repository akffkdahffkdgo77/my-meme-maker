import Head from 'next/head';

import BaseLayout from '@organisms/BaseLayout';
import '@styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayout>
            <Head>
                <title>My Sticker</title>
            </Head>
            <Component {...pageProps} />
        </BaseLayout>
    );
}

export default MyApp;
