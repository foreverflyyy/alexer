import { Category } from '@/widgets/category';
import styles from './styles.module.scss';
import {drinks} from "@/shared/data/drinks";
import {DrinkItem} from "@/entities/drink";
import Drink from "@/shared/types/Drink";
import {useMemo} from "react";

export const SimilarDrinks = ({drink}: {drink: Drink}) => {
    const needDrinks = useMemo(() => {
        return drinks.filter(item => item.id !== drink?.id)
    }, [drink?.id]);

    return (
    <Category containerClass={styles.container}>
      <div className={styles.headline}>Похожие напитки:</div>
      <Category.Carousel items={needDrinks} renderItem={(drink: Drink) => <DrinkItem item={drink} />} />
    </Category>
    );
};