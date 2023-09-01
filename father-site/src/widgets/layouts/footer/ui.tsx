import clsx from "clsx";
import styles from "./styles.module.scss";
import {messengers} from "@/widgets/layouts/footer/config/messengers";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={clsx('container', styles.container)}>
                <div className={styles.row}>
                    <p className={styles.telephone}>Телефон:</p>
                    <p className={styles.telephone_number}>+79049891507</p>
                </div>
                <div className={styles.row}>
                    <div className={styles.contacts_title}>Контакты:</div>
                    <div className={styles.contacts}>
                        {messengers.map((messengers) => (
                            <Link
                                key={messengers.path}
                                href={messengers.link}
                                className={styles.link}
                                target="_blank"
                            >
                                <Image
                                    src={`/messengers/${messengers.path}`}
                                    className={styles.link_image}
                                    alt={messengers.path}
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};