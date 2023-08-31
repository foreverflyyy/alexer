import Drink from "@/shared/types/Drink";

interface Props {
    item: Drink
}

export const PoputDrink = ({item}: Props) => {
    return (
        <div id="popup_kalganovka" className="popup">
            <div className="popup__body">
                <div className="popup__content">
                    <a href="#header" className="popup__close close-popup">X</a>
                    <div className="popup__title">{item.title}</div>
                    <div className="popup__main-content">
                        <div className="popup-headline">
                            <figure className="popup__img">

                            </figure>
                            <div className="popup-headline__text">

                            </div>
                        </div>
                        <div className="popup__text">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}