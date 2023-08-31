import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
    <Html className="page" lang="ru">
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="preload" href="/fonts/e-Ukraine-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
            <link rel="preload" href="/fonts/e-Ukraine-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
            <link rel="preload" href="/fonts/e-Ukraine-Light.woff2" as="font" type="font/woff2" crossOrigin="" />
            <link href="/logo.png" rel="icon" type="image/png" sizes="16x16" />
            <link href="/logo.png" rel="icon" type="image/png" sizes="32x32" />
            <link rel="apple-touch-icon" href="/logo.png" />
            <meta name="theme-color" content="#000" />
        </Head>
        <body className="page__body">
        <Main />
        <div id="modal" />
            <NextScript />
        </body>
    </Html>
);

export default Document;