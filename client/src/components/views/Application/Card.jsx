import React from 'react'
import applyStyle from '../Application/application.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaCalendarCheck, FaRegUser} from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Card = ({card, onClick, style}) => {

    const now = new Date();
    const end = new Date(card.endDate);
    const duration = () => {
        let dur = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        if(dur > 0)
            return "D - " + dur;
        else {
            if(card.infoDate !== '') return "발표 : " + card.infoDate;
            else return "D + " + (dur * -1);
        }
    }

    const position = card.jobPosition.length > 20 ? card.jobPosition.substring(0, 20) + "..." : card.jobPosition;

    const quotesStyle = {
        marginBottom: '1rem',
        color: 'rgb(189 186 186)'
    }
 
    return (
        <div className={ applyStyle.cards } onClick={() => onClick(card._id)} style={ style }>
            <div className={ applyStyle.cardInfo }>
                <div className={ `${applyStyle.companyName} ${fontStyle.jua}` }>
                    <ImQuotesLeft style={quotesStyle}/>
                    <span>
                         {card.companyName} 
                    </span>
                    <ImQuotesRight style={quotesStyle}/>
                </div>
                <div className={ applyStyle.date }>
                    {/*
                        상태에 따라 변경 
                        서류 : startDate ~ endDate
                        시험 : 시험 날짜 
                        면접 : 면접 날짜 
                    */}
                    <FaCalendarCheck /> {card.startDate} ~ {card.endDate}
                </div>
                <div className={`${ applyStyle.duration } ${ fontStyle.hiMelody}`}>
                    {/*
                        상태에 따라 변경 
                        duration > 0 ? d-day : 발표 날짜 
                    */}
                    { duration() }
                </div>
                <div className={ applyStyle.position }>
                    <FaRegUser/> {position}
                </div>
                <div className={`${ applyStyle.cardState } ${ fontStyle.sunflower }`}>
                    {card.cardState}
                </div>
            </div>
        </div> 
    )
}

export default Card
