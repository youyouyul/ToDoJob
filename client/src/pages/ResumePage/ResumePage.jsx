import React from 'react'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import resumeStyle from '../ResumePage/resumePage.module.css';
import fontStyle from '../../assets/css/fonts.module.css';
import { FaRegEdit, FaRegTrashAlt, FaLocationArrow, FaRegCalendarCheck, FaRegUser, 
         FaCheckDouble, FaRegStickyNote } from 'react-icons/fa';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import ResumeList from './ResumeList';

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
        cardState: '작성 중',
        memo: '스마일 회사는 스마일'
    }

    const resumes = [
        {
            _id: 1,
            title: '지원 동기',
            context: '지원 동기는 지원 동기 입니다.',
            limit: 300
        },
        {
            _id: 2,
            title: '지원분야와 관련된 구체적인 지식이나 경험은 무엇이 있나요? *예시 : 관련 학습경험, 동아리 활동, 수상경험, 인턴십, 아르바이트 등',
            context: '지원 동기는 지원 동기 입니다람쥐.',
            limit: 500
        }
    ];

    const quotesStyle = {
        color: 'rgb(146 136 136)'
    }
    const resume = resumes.map( index =>
           <ResumeList resume={ index } key={ index._id } />
       );

    return (  
        <div>
            <Header/>
            <div className={ resumeStyle.body }>
                <div className={ resumeStyle.container } >
                    <div>
                        <div className={ resumeStyle.btn }>
                            <button className={ resumeStyle.updateBtn } title="edit"><FaRegEdit/></button>
                            <button className={ resumeStyle.saveBtn } title="save"><FaCheckDouble/></button>
                            <button className={ resumeStyle.deleteBtn } title="delete"><FaRegTrashAlt/></button>
                        </div>
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
                                    <p><a href={card.companyUrl}>{card.companyUrl}</a></p>
                                </div>
                                <div className={ resumeStyle.inputBox }>
                                    <label className={ fontStyle.sunflower }><FaRegCalendarCheck/> 접수기간 </label>
                                    <p>{card.startDate} ~ {card.endDate}</p>
                                </div>
                                <div className={ resumeStyle.inputBox }>
                                    <label className={ fontStyle.sunflower }><FaRegCalendarCheck/> 발표일 </label>
                                    <p>{card.infoDate}</p>
                                </div>
                                <div className={ resumeStyle.inputBox }>
                                    <label className={ fontStyle.sunflower }><FaRegUser/> 직무 </label>
                                    <p>{card.jobPosition}</p>
                                </div>
                                <div className={ resumeStyle.memoBox }>
                                    <label className={ fontStyle.sunflower }><FaRegStickyNote/> 메모 </label>
                                    <textarea className={ resumeStyle.memo } readOnly value={card.memo} />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className={ resumeStyle.btn }>
                            <button className={ resumeStyle.updateBtn } title="edit"><FaRegEdit/></button>
                            <button className={ resumeStyle.saveBtn } title="save"><FaCheckDouble/></button>
                            <button className={ resumeStyle.deleteBtn } title="delete"><FaRegTrashAlt/></button>
                        </div>
                        <div className={ resumeStyle.resume}>
                            <div className={ resumeStyle.infoBox }>
                                { resume }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ResumePage
