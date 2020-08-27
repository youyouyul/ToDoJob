import React from 'react'
import applyStyle from '../Application/application.module.css';

const Card = ({card, onClick}) => {

    const now = new Date();
    const end = new Date(card.endDate);
    const duration = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

 
    return (
        <div className={ applyStyle.cards } onClick={() => onClick(card._id)}>
            <div className={ applyStyle.cardInfo }>
                <p>
                    {card.companyName}
                </p>
                <p>
                    {card.startDate} ~ {card.endDate}
                </p>
                <p>
                    {duration > 0 ? "D - " + duration : "D + " +  duration}
                </p>

            </div>
        </div> 
    )
}

export default Card
