/* eslint-disable boundaries/element-kinds */
import type { PropsWithChildren } from 'react';
import { Header, Footer } from '@/widgets/layouts';

export const BaseLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            <main className="main">
                {children}
            </main>
            <Footer/>
        </>
    );
};