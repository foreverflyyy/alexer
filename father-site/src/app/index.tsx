import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { BaseLayout } from '@/widgets/layouts';

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    return (
        <>
            <BaseLayout>
                <Component {...pageProps} />
            </BaseLayout>
        </>
    );
};

export default App;