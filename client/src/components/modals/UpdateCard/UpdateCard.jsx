import React, { useState } from 'react'
import updateStyle from '../UpdateCard/updateCard.module.css';
import { FaTimes } from 'react-icons/fa';
import { RESUME, TEST, INTERVIEW, FINAL,
         DOING, IN, OUT ,
         processCode } from '../../../Config';

const UpdateCard = ({ cards, onClick }) => {

    const card = cards[0];

    const [result, setResult] = useState(card.result);
    const [process, setProcess] = useState(0);
    const [date, setDate] = useState("");
    const [infoDate, setInfoDate] = useState("");

    const onSubmit = () => {

    }

    return (
        <div className={ updateStyle.container }>
            <div className={ updateStyle.modal }>
                <div className={ updateStyle.modalHeader}>
                    <p>{ card.companyName }</p>
                    <button onClick={onClick}><FaTimes/></button>
                </div>
                <div className={ updateStyle.modalBody}>
                    <form className={ updateStyle.modalForm }
                          onSubmit={onSubmit}>
                        <div className={ updateStyle.formDiv}>
                            <label>전형</label>
                            <input value={processCode(card.process)} readOnly/>    
                        </div>
                        <div className={ updateStyle.formDiv}>
                            <label>결과</label>
                            <select value={result} onChange={(e) => setResult(e.target.value)}>
                                <option value={DOING}>진행 중</option>
                                <option value={IN}>합격</option>
                                <option value={OUT}>탈락</option>
                            </select>
                        </div>
                        <hr/>
                        { result === "1" ? 
                        <div>
                            <div className={ updateStyle.formDiv}>
                                <label>다음 전형 *</label>
                                <select value={process} onChange={(e) => setProcess(e.target.value)}>
                                    <option value={RESUME}>서류</option>
                                    <option value={TEST}>시험</option>
                                    <option value={INTERVIEW}>면접</option>
                                    <option value={FINAL}>최종</option>
                                </select>
                            </div>
                            <div className={ updateStyle.formDiv}>
                                <label>날짜 *</label>
                                <input value={date} onChange={(e) => setDate(e.target.value)} required/>    
                            </div>
                            <div className={ updateStyle.formDiv}>
                                <label>발표일</label>
                                <input value={infoDate} onChange={(e) => setInfoDate(e.target.value)}/>
                            </div>
                        </div>
                        : null }
                        <div className={ updateStyle.modalFooter }>
                            <button>저장</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard
