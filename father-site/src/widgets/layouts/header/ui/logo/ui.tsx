import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export const Logo = () => (
    <Link href={"/"} className={styles.logo}>
        <Image priority className={styles.image} width={182} height={182} src="/logo.png" alt="Store" />
    </Link>
);