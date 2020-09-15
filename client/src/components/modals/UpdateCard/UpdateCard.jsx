import React, { useState } from 'react'
import Axios from 'axios';
import modalStyle from '../../modals/modals.module.css';
import { FaTimes } from 'react-icons/fa';
import { RESUME, TEST, INTERVIEW, FINAL,
         DOING, WAITING, IN, OUT ,
         processCode } from '../../../Config';

const UpdateCard = ({ cards, onClick }) => {

    const card = cards[0];

    const [result, setResult] = useState(card.result);
    const [process, setProcess] = useState(card.process);
    const [date, setDate] = useState("");
    const [infoDate, setInfoDate] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        let body = {
            endDate: result == IN ? date : card.endDate,
            infoDate: result == IN ? infoDate : card.infoDate,
            process: process,
            result: result == IN ? DOING : result
        }

        Axios.patch('/api/cards/update/state/' + card._id, body)
            .then(response => {
                console.log(response.data);
                if(!response.data.success) {
                    alert("수정을 실패했습니다.")
                } 
                window.location.reload();
            })
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
                                <option value={WAITING}>대기 중</option>
                                <option value={IN}>합격</option>
                                <option value={OUT}>탈락</option>
                            </select>
                        </div>
                        <hr/>
                        { result == IN ? 
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
