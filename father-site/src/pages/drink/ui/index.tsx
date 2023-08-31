import { NextSeo } from 'next-seo';
import { MainSection } from './main-section';
import { SimilarDrinks } from './similar-drinks';
import {useMemo} from "react";
import {drinks} from "@/shared/data/drinks";

export const DrinkPage = ({id}: {id: string}) => {

    const drinkInfo = useMemo(() => {
        return drinks.find(item => item.id === Number(id));
    }, [id]);

    return (
        <>
            <NextSeo
                nofollow
                noindex
                title={drinkInfo?.name}
                description={drinkInfo?.description}
                openGraph={{
                    title: drinkInfo?.name,
                    description: drinkInfo?.description,
                    images: [
                        {
                            url: `/drinks/${drinkInfo?.value}/main.jpg`,
                            alt: drinkInfo?.name,
                        },
                    ],
                }}
            />
            <MainSection drink={drinkInfo!} />
            <SimilarDrinks/>
        </>
    );
};