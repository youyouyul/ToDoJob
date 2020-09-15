import React, { useState } from 'react'
import modalStyle from '../../modals/modals.module.css';
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
        <div className={ modalStyle.container }>
            <div className={ modalStyle.modal }>
                <div className={ modalStyle.modalHeader}>
                    <p>{ card.companyName }</p>
                    <button onClick={onClick}><FaTimes/></button>
                </div>
                <div className={ modalStyle.modalBody}>
                    <form className={ modalStyle.modalForm }
                          onSubmit={onSubmit}>
                        <div>
                            <label>전형</label>
                            <input value={processCode(card.process)} readOnly/>    
                        </div>
                        <div>
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
                            <div>
                                <label>다음 전형 *</label>
                                <select value={process} onChange={(e) => setProcess(e.target.value)}>
                                    <option value={RESUME}>서류</option>
                                    <option value={TEST}>시험</option>
                                    <option value={INTERVIEW}>면접</option>
                                    <option value={FINAL}>최종</option>
                                </select>
                            </div>
                            <div className={ modalStyle.date }>
                                <div style={{ marginRight: '0.5rem'}}>
                                    <label>날짜 *</label>
                                    <input value={date} onChange={(e) => setDate(e.target.value)} required/>    
                                </div>
                                <div>
                                    <label>발표일</label>
                                    <input value={infoDate} onChange={(e) => setInfoDate(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        : null }
                        <div className={ modalStyle.modalFooter }>
                            <button>저장</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UpdateCard
