import clsx from 'clsx';
import styles from './styles.module.scss';
import Image from "next/image";

export const Info = () => (
    <section className={styles.section}>
        <div className={clsx('container', styles.container)}>
            <div>
                <div className={styles.title}>
                    Добро пожаловать на сайт про напитки от производителя Alexer!
                </div>
                <p className={styles.desc}>
                    У нас вы можете легко и быстро найти и посмотреть интересующие вас напитки благодаря нашему удобному сайту.
                </p>
            </div>
            <Image src={"/mainFace.png"} alt={"main-face"} className={styles.main_image} width={1000} height={1000}/>
        </div>
    </section>
);