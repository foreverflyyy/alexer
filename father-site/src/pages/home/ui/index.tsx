import { Info } from './info';
import {Photos} from "./photos";
import {Videos} from "./videos";
import {NextSeo} from "next-seo";

export const HomePage = () => (
    <>
        <NextSeo
            nofollow
            noindex
            title={"Сайт с рецептами напитков!"}
            description={"Рецепты напитков, которые подойдут каждому!"}
            openGraph={{
                title: "Рецепты напитков",
                description: "Рецепты напитков, подойдут каждому!",
                images: [
                    {
                        url: `/logo.png`,
                        alt: "Рецепты",
                    },
                ],
            }}
        />
        <Info/>
        <div className={"container"}>
            <Photos/>
            <Videos/>
        </div>
    </>
);
