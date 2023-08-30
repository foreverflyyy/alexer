import clsx from 'clsx';
import { Burger } from './burger';
import { Logo } from './logo';
import { Menu } from './menu';
import styles from './styles.module.scss';
import {Nav} from "@/widgets/layouts/header/ui/nav";

export const Header = () => {

    return (
        <header className={clsx(styles.header, styles.fixed )}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.row}>
                    <Logo />
                    <Nav/>
                </div>
                <div className={styles.row}>
                    <Burger />
                </div>
            </div>
            <Menu />
        </header>
    );
};