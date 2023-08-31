/* eslint-disable jsx-a11y/media-has-caption */
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import {PhotoForCarousel} from "@/pages/home/ui/photos/types";
import styles from './styles.module.scss';

interface SlideProps {
    item: PhotoForCarousel;
}

export const PhotoSlide = ({ item }: SlideProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.content}>
                <CSSTransition timeout={0} classNames={{ enterDone: styles.done }}>
                    <div className={styles.title}>
                        {item?.title}
                    </div>
                </CSSTransition>
            </div>
            <Image priority sizes="100%" fill quality={100} className={styles.image} src={item?.image} alt={item?.title} />
        </div>
    );
};
