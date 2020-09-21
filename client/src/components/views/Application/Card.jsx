import React from 'react'
import { RESUME, processCode, resultCode} from '../../../Config';
import applyStyle from '../Application/application.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaCalendarCheck, FaHome} from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Card = ({card, onClickModalState, style}) => {

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
            if(card.infoDate !== "" & card.infoDate !== null) return "발표 : " + card.infoDate.substring(0, 10);
            else return "D + " + (dur * -1);
        }
    }

    const showDate = () => {
        if(card.process === RESUME) {
            return startDate + " ~ " + endDate;
        } else {
            return endDate;
        }
    }

    const showResult = () => {
        if(card.result > 1){
            return processCode(card.process) + " " + resultCode(card.result);
        }
        return resultCode(card.result);
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
                    <span onClick={() => onClickModalState(card._id, "DETAIL")}>{ card.companyName }</span>
                    <ImQuotesRight style={quotesStyle}/>
                </div>
                <div className={ applyStyle.companyUrl }>
                    <FaHome/> <a href={ card.companyUrl } className={ fontStyle.sunflower }>홈페이지</a>
                </div>
                <div className={ applyStyle.date }>
                    <FaCalendarCheck /> { showDate() }
                </div>
                <div className={`${ applyStyle.duration } ${ fontStyle.hiMelody}`}>
                    { duration() }
                </div>
                <div className={`${ applyStyle.cardState } ${ fontStyle.sunflower }`} onClick={() => onClickModalState(card._id, "UPDATE")}>
                    { showResult() }
                </div>
            </div>
        </div> 
    )
}

export default Card
