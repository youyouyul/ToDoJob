import React from 'react'
import { PREPARING, WAITING } from '../../../Config';
import applyStyle from '../Application/application.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaCalendarCheck, FaRegUser} from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Card = ({card, onClick, style}) => {

    const startDate = card.startDate.substring(0, 10);
    const endDate = card.endDate.substring(0, 10);

    const now = new Date();
    const end = new Date(card.endDate);
    const duration = () => {
        let dur = Math.floor((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

        if(dur > 0)
            return "D - " + dur;
        else if(dur === 0) return "D-day";
        else {
            if(card.infoDate !== '') return "발표 : " + card.infoDate;
            else return "D + " + (dur * -1);
        }
    }

    const showDate = () => {
        if(card.process === "RESUME") {
            return startDate + " ~ " + endDate;
        } else {
            return endDate;
        }
    }

    const position = card.jobPosition.length > 20 ? card.jobPosition.substring(0, 20) + "..." : card.jobPosition;

    const showState = () => {
        if(card.process === 'FINAL')
            return card.result;
        return card.state ? WAITING : PREPARING;
    }

    const quotesStyle = {
        marginBottom: '1rem',
        color: 'rgb(189 186 186)'
    }
 
    return (
        <div className={ applyStyle.cards } style={ style }>
            <div className={ applyStyle.cardInfo }>
                <div className={ `${applyStyle.companyName} ${fontStyle.jua}` }>
                    <ImQuotesLeft style={quotesStyle}/>
                    <span>
                         <a href={card.companyUrl}>{card.companyName}</a>
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
                    <FaCalendarCheck /> { showDate() }
                </div>
                <div className={`${ applyStyle.duration } ${ fontStyle.hiMelody}`}>
                    { duration() }
                </div>
                <div className={ applyStyle.position }>
                    <FaRegUser/> {position}
                </div>
                <div className={`${ applyStyle.cardState } ${ fontStyle.sunflower }`} onClick={() => onClick(card._id)}>
                    { showState() }
                </div>
            </div>
        </div> 
    )
}

export default Card
