import { BaseLayout } from 'layouts';

import 'styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <BaseLayout>
            <Component {...pageProps} />
        </BaseLayout>
    );
}

export default MyApp;
