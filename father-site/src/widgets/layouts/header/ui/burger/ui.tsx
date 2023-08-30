import clsx from 'clsx';
import Image from "next/image";
import styles from './styles.module.scss';

export const Burger = () => {
    return (
        <button className={clsx('btn-reset', styles.btn)}>
            <Image src={"icons/common/burger.svg"} alt={"burger"} width={30} height={30}/>
        </button>
    );
};