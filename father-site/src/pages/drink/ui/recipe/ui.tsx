import React from 'react';
import Drink from "@/shared/types/Drink";

export const Recipe = ({drink}: {drink: Drink}) => {
    return (
        <div>
            <div>Рецепт:</div>
            {drink?.recipe}
        </div>
    );
};