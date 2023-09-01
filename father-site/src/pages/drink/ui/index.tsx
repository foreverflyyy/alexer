import { NextSeo } from 'next-seo';
import {drinks} from "@/shared/data/drinks";
import { MainSection } from './main-section';
import { SimilarDrinks } from './similar-drinks';
import {useMemo} from "react";
import {Photos} from "./photos";
import {Recipe} from "./recipe";

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
            <MainSection drink={drinkInfo!}/>
            <Recipe drink={drinkInfo!}/>
            <Photos drink={drinkInfo!}/>
            <SimilarDrinks drink={drinkInfo!}/>
        </>
    );
};
