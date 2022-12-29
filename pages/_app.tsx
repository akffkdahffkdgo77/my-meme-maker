import type { AppProps } from 'next/app';

import { BaseLayout } from 'layouts';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    );
}

export default MyApp;
