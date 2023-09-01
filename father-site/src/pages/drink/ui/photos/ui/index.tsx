import React from 'react';
import Drink from "@/shared/types/Drink";
import Image from "next/image"
import styles from "./styles.module.scss"

export const Photos = ({drink}: {drink: Drink}) => {
    return (
        <div className={"container"}>
            <div  className={styles.headline}>Фото:</div>
            <div className={styles.grid}>
                {drink?.images.map((image) => (
                    <div className={styles.item} key={image}>
                        <div className={styles.imageWrapper}>
                            <Image
                                sizes="100%"
                                fill
                                quality={100}
                                className={styles.image}
                                alt={'image'}
                                src={`/drinks/${drink.value}/${image}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};