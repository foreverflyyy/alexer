import React from 'react';
import Drink from "@/shared/types/Drink";
import styles from "./styles.module.scss";

export const Recipe = ({drink}: {drink: Drink}) => {

    if(!drink?.recipe)
        return null;

    return (
        <div className={"container"}>
            <div className={styles.headline}>Рецепт:</div>
            <div>
                {drink.recipe.split("|").map((text, i) => {
                    if(text === " ") return <br key={i}/>

                    return (<p key={i} className={styles.recipe_text}>{text}</p>)
                })}
            </div>
        </div>
    );
};