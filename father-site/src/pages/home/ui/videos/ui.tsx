import React from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx";

export const Videos = () => {
    return (
        <div className={clsx("container", styles.videos_section)}>
            <div className={styles.headline}>Видео с приготовлений</div>
            <div className={styles.list_videos}>
                <video controls preload="auto" className={styles.video_item}>
                    <source src="/videos/water_process.mp4" type="video/mp4"/>
                </video>
                <video controls preload="auto" className={styles.video_item}>
                    <source src="/videos/view_process.mp4" type="video/mp4"/>
                </video>
                <video controls preload="auto" className={styles.video_item}>
                    <source src="/videos/yellow.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
};