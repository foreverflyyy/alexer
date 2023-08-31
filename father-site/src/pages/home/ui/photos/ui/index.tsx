import React, {useState} from 'react';
import styles from "./styles.module.scss"
import {CarouselMultiply} from "@/shared/ui/carousel-multiply";
import {processPhotos} from "../config";
import {PhotoSlide} from "./PhotoSlide";

export const Photos = () => {
    const [realIndex, setRealIndex] = useState<number>(0);

    return (
        <div className={"container"}>
            <div className={styles.headline}>Процесс работы</div>
            <CarouselMultiply
                options={{
                    loop: true,
                }}
                className={styles.slider}
                slideClassName={styles.slide}
                prevBtnClass={styles.prevBtn}
                nextBtnClass={styles.nextBtn}
                items={processPhotos}
                navigation={false}
                onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
                renderItem={(item, idx) => <PhotoSlide item={item} />}
            />
        </div>
    );
};