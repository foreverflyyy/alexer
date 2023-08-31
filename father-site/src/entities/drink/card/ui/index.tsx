import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import Drink from "@/shared/types/Drink";

interface DrinkItemProps {
    item: Drink;
}

export const DrinkItem = ({ item }: DrinkItemProps) => {

    return (
        <Link className={styles.item} href={`/drink/${item?.id}`}>
            <div className={styles.imageWrapper}>
                {item?.name && (
                    <Image
                        sizes="100%"
                        fill
                        quality={100}
                        className={styles.image}
                        alt={item?.name ?? ''}
                        src={`/drinks/${item?.value}/main.jpg`}
                    />
                )}
            </div>
        </Link>
    );
};
