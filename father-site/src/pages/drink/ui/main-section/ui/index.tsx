import clsx from 'clsx';
import type { CSSProperties } from 'react';
import styles from './styles.module.scss';
import Drink from "@/shared/types/Drink";

export const MainSection = ({drink}: {drink: Drink}) => {

  return (
    <section className={styles.section}>
      <div className={styles.height} />
      <div style={{ backgroundImage: `/drinks/${drink?.value}/main.jpg` } as CSSProperties} className={styles.bg} />
      <div className={clsx('container', styles.container)}>
        <div className={styles.content}>
          <div style={{fontSize: 24}}>{drink?.title}</div>
          <div style={{fontSize: 16, paddingTop: 10}}>{drink?.description}</div>
        </div>
      </div>
    </section>
  );
};
