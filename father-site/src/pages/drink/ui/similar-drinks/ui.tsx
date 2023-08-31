import { Category } from '@/widgets/category';
import styles from './styles.module.scss';
import {drinks} from "@/shared/data/drinks";
import {DrinkItem} from "@/entities/drink";
import Drink from "@/shared/types/Drink";

export const SimilarDrinks = () => {
  return (
    <Category containerClass={styles.container}>
      <div className={styles.title}>Похожие экскурсии</div>
      <Category.Carousel items={drinks} renderItem={(drink: Drink) => <DrinkItem item={drink} />} />
    </Category>
  );
};
