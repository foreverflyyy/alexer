import {Catalog} from "@/widgets/catalog";
import {NextSeo} from "next-seo";

export const Drinks = () => {
    return (
        <>
            <NextSeo
                nofollow
                noindex
                title={"Рецепты напитков"}
                description={"Рецепты напитков, подойдут каждому!"}
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
            <Catalog title={"Рецепты напитков:"}/>
        </>
    )
}