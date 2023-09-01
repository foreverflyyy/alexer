import React from 'react';
import styles from "./styles.module.scss"
import clsx from "clsx";
import {pathsToVideos} from "@/pages/home/ui/videos/config";

export const Videos = () => {
    return (
        <div className={clsx("container", styles.videos_section)}>
            <div className={styles.headline}>Видео:</div>
            <div className={styles.list_videos}>
                {pathsToVideos.map(path => (
                    <video key={path} controls preload="auto" className={styles.video_item}>
                        <source src={path} type="video/mp4"/>
                    </video>
                ))}
            </div>
        </div>
    );
};