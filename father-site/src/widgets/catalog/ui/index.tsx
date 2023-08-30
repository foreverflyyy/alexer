import clsx from 'clsx';
import { DrinkItem } from '@/entities/drink/item';
import styles from './styles.module.scss';
import {drinks} from "@/widgets/catalog/data/drinks";

interface CatalogProps {
    title: string;
}

export const Catalog = ({ title }: CatalogProps) => {

    return (
        <section className={styles.section}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.top}>
                    <div className={styles.title}>
                        {title}
                    </div>
                </div>
                <div className={styles.grid}>
                    {drinks?.map((item) => (
                        <DrinkItem key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};