import clsx from 'clsx';
import styles from './styles.module.scss';

export const Info = () => (
    <section className={styles.section}>
        <div className={clsx('container', styles.container)}>
            <div className={styles.title}>
                Добро пожаловать на сайт про напитки от производителя Alexer!
            </div>
            <p className={styles.desc}>
                У нас вы можете легко и быстро найти и посмотреть интересующие вас напитки благодаря нашему удобному сайту.
            </p>
        </div>
    </section>
);