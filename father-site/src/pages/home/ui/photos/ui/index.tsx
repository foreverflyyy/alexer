import React, {useState} from 'react';
import styles from "./styles.module.scss"
import {processLeftPhotos, processRightPhotos} from "../config";
import Image from "next/image";
import clsx from "clsx";

export const Photos = () => {
    const [realIndex, setRealIndex] = useState<number>(0);

    return (
        <div className={"container"}>
            <div className={styles.headline}>Процесс работы</div>
            <div className={styles.container}>
                <div className={styles.left}>
                    {processLeftPhotos.map(photo => (
                        <Image
                            key={photo.image}
                            src={photo.image}
                            alt={photo.needClass}
                            width={400}
                            height={400}
                            className={clsx({
                                [photo.needClass]: true,
                                [styles.large]: photo.isBig,
                                [styles.small]: !photo.isBig
                            })}
                        />
                    ))}
                </div>
                <div className={styles.right}>
                    {processRightPhotos.map(photo => (
                        <Image
                            key={photo.image}
                            src={photo.image}
                            alt={photo.needClass}
                            width={400}
                            height={400}
                            className={clsx({
                                [photo.needClass]: true,
                                [styles.large]: photo.isBig,
                                [styles.small]: !photo.isBig
                            })}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};