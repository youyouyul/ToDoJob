import React from 'react'
import applyStyle from '../Application/application.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';

const Card = ({card, onClick}) => {

    const now = new Date();
    const end = new Date(card.endDate);
    const duration = () => {
        let dur = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        if(dur > 0)
            return "D - " + dur;
        else {
            if(card.infoDate !== '') return "발표일 : " + card.infoDate;
            else return "D + " + (dur * -1);
        }
    }

    const position = card.jobPosition.length > 20 ? card.jobPosition.substring(0, 20) + "..." : card.jobPosition;

 
    return (
        <div className={ applyStyle.cards } onClick={() => onClick(card._id)}>
            <div className={ applyStyle.cardInfo }>
                <p className={ `${applyStyle.companyName} ${fontStyle.jua}` }>
                    {card.companyName}
                </p>
                <p className={ applyStyle.date }>
                    {/*
                        상태에 따라 변경 
                        서류 : startDate ~ endDate
                        시험 : 시험 날짜 
                        면접 : 면접 날짜 
                    */}
                    {card.startDate} ~ {card.endDate}
                </p>
                <p className={ applyStyle.duration }>
                    {/*
                        상태에 따라 변경 
                        duration > 0 ? d-day : 발표 날짜 
                    */}
                    { duration() }
                </p>
                <p className={ applyStyle.position }>
                    {position}
                </p>
                <p>
                    {card.cardState}
                </p>
            </div>
        </div> 
    )
}

export default Card
