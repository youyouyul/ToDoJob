import React from 'react'
import { RESUME, TEST, INTERVIEW, FINAL,
         stateCode, 
         processCode, resultCode} from '../../../Config';
import applyStyle from '../Application/application.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaCalendarCheck, FaHome} from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const Card = ({card, onClickDetail, onClickState, style}) => {

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
        if(card.process === RESUME) {
            return startDate + " ~ " + endDate;
        } else {
            return endDate;
        }
    }

    const showState = () => {
        if(card.state === 2){
            return processCode(card.process) + " " + resultCode(card.result);
        }
        return stateCode(card.state);
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
                    <span onClick={() => onClickDetail(card._id)}>{ card.companyName }</span>
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
                <div className={`${ applyStyle.cardState } ${ fontStyle.sunflower }`} onClick={() => onClickState(card._id)}>
                    { showState() }
                </div>
            </div>
        </div> 
    )
}

export default Card
