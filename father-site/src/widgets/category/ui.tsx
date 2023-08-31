import clsx from 'clsx';
import Link from 'next/link';
import type { ElementType, PropsWithChildren } from 'react';
import { CarouselMultiply, type CarouselMultiplyProps } from '@/shared/ui/carousel-multiply';
import styles from './styles.module.scss';

interface CategoryProps extends PropsWithChildren {
  className?: string;
  containerClass?: string;
}

export const Category = ({ className, containerClass, children }: CategoryProps) => (
  <section className={clsx(styles.section, className)}>
    <div className={clsx('container', containerClass, styles.container)}>{children}</div>
  </section>
);

function CategoryCarousel<T>({ items, slideClassName, ...props }: CarouselMultiplyProps<T>) {
  return (
    <div className={styles.wrapper}>
      {items ? (
        <CarouselMultiply
          freeMode={{ momentumBounceRatio: 0 }}
          prevBtnClass={styles.prevBtn}
          nextBtnClass={styles.nextBtn}
          className={styles.slider}
          slideClassName={clsx(styles.slide, slideClassName)}
          items={items}
          {...props}
        />
      ) : null
      }
    </div>
  );
}

Category.Carousel = CategoryCarousel;
