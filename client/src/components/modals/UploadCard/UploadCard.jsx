import React, { useState } from 'react'
import uploadStyle from '../UploadCard/uploadCard.module.css';
import fontStyle from '../../../assets/css/fonts.module.css';
import { FaTimes } from 'react-icons/fa';
import Axios from 'axios';

function UploadCard({ userName, onClick }) {

    const [companyName, setCompanyName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [infoDate, setInfoDate] = useState("");
    const [companyUrl, setCompanyUrl] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [memo, setMemo] = useState("");

    const onSubmit = (e) => {

        e.preventDefault();
        let body = {
            userName: userName,
            companyName: companyName,
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            infoDate: new Date(infoDate),
            companyUrl: companyUrl,
            jobPosition: jobPosition,
            memo: memo
        }

        Axios.post('/api/cards/insert', body)
            .then(response => {
                if(response.data.success) {
                    window.location.reload();
                } else {
                    alert("업로드를 실패했습니다.");
                }
            })
    }

    return (
        <div className={ uploadStyle.container}>
            <div className={ `${ uploadStyle.modal } ${ fontStyle.sunflower }`}>
                <div className={ uploadStyle.modalHeader}>
                    <p>자소서 등록</p>
                    <button onClick={onClick}><FaTimes/></button>
                </div>
                <div className={ uploadStyle.modalBody}>
                    <form className={ uploadStyle.modalForm }
                          onSubmit={onSubmit} >
                        <div>
                            <label>기업 명</label>
                            <input value={ companyName } onChange={(e) => setCompanyName(e.target.value)} required/>
                        </div>
                        <div>
                            <label>기업 사이트</label>
                            <input value={ companyUrl } onChange={(e) => setCompanyUrl(e.target.value)} required/>
                        </div>
                        <div>
                            <label>직무</label>
                            <input value={ jobPosition } onChange={(e) => setJobPosition(e.target.value)} required/>
                        </div>
                        <div>
                            <label>시작일</label>
                            <input value={ startDate } onChange={(e) => setStartDate(e.target.value)} required/>    
                        </div>
                        <div>
                            <label>마감일</label>
                            <input value={ endDate } onChange={(e) => setEndDate(e.target.value)} required/>
                        </div>
                        <div>
                            <label>발표일</label>
                            <input value={ infoDate } onChange={(e) => setInfoDate(e.target.value)}/>  
                        </div>
                        <div>
                            <label>메모</label>
                            <input value={ memo } onChange={(e) => setMemo(e.target.value)}/>
                        </div>
                        <div className={ uploadStyle.modalFooter }>
                            <button>저장</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadCard
