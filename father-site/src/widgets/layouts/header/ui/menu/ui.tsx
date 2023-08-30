import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import { items } from './config';
import Image from "next/image";
import styles from './styles.module.scss';

export const Menu = () => {

    const { pathname } = useRouter();

    return (
        <div className={clsx(styles.menu)}>
            <button className={clsx('btn-reset', styles.close)}>
                <Image src={"icons/common/burger.svg"} alt={"menu"} width={30} height={30}/>
            </button>
            <div className={clsx('container', styles.container)}>
                <ul className={clsx('list-reset', styles.list)}>
                    {items.map((item) => {
                        const isCurrentPage = pathname === item.href;

                        return (
                            <CSSTransition key={item.text} timeout={item.timeout} classNames={{ enterDone: styles.done }}>
                                <li className={clsx(styles.item, isCurrentPage && styles.isCurrent)}>
                                    <Link href={item.href} className={styles.link}>
                                        {item.text}
                                    </Link>
                                </li>
                            </CSSTransition>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
