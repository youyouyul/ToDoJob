import React from 'react'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import resumeStyle from '../ResumePage/resumePage.module.css';
import fontStyle from '../../assets/css/fonts.module.css';
import { FaRegEdit, FaRegTrashAlt, FaLocationArrow, FaRegCalendarCheck, FaRegUser } from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

function ResumePage({ match }) {
    const companyId = match.params.companyId;

    const card = {
        _id: 1,
        companyName: '스마일회사',
        startDate: '2020-08-24',
        endDate: '2020-09-02',
        infoDate: '2020-09-11',
        companyUrl: 'http://google.com',
        jobPosition: 'Web Platform Service FrontEnd',
        cardState: '작성 중'
    }
    const quotesStyle = {
        color: 'rgb(146 136 136)'
    }

    return (  
        <div>
            <Header/>
            <div className={ resumeStyle.body }>
                <div className={ resumeStyle.update }>
                    <button className={ resumeStyle.updateBtn }><FaRegEdit/></button>
                    <button className={ resumeStyle.deleteBtn }><FaRegTrashAlt/></button>
                </div>
                <div className={ resumeStyle.container } >
                    <div className={ resumeStyle.info}>
                        <form className={ resumeStyle.infoBox }>
                            <div className={`${ resumeStyle.companyName } ${ fontStyle.doHyeon }`}>
                                <ImQuotesLeft style={quotesStyle}/>
                                <span>{card.companyName}</span>
                                <ImQuotesRight style={quotesStyle}/>
                            </div>
                            <br/>
                            <div className={ resumeStyle.inputBox }>
                                <label className={ fontStyle.sunflower }><FaLocationArrow/> 바로가기</label>
                                <p>{card.companyUrl}</p>
                            </div>
                            <div className={ resumeStyle.inputBox }>
                                <label className={ fontStyle.sunflower }><FaRegCalendarCheck/> 접수기간 </label>
                                <p>{card.startDate} ~ {card.endDate}</p>
                            </div>
                            <div className={ resumeStyle.inputBox }>
                                <label className={ fontStyle.sunflower }><FaRegUser/> 직무 </label>
                                <p>{card.jobPosition}</p>
                            </div>
                        </form>
                    </div>
                    <div className={ resumeStyle.resume}>
                        <div>
                            
                        </div>
                        <div>
                            <textarea />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ResumePage
